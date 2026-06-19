import codecs
import re

with codecs.open('app.js', 'r', 'utf-8') as f:
    js = f.read()

# 1. Update `renderCheckpoint` function
target_render = """function renderCheckpoint(checkpoint) {
    const container = document.getElementById('checkpoint-container');
    container.innerHTML = '';
    
    if (!checkpoint) return; // Si no hay checkpoint, no renderizar nada

    const card = document.createElement('div');
    card.className = 'objective-card';
    
    const header = document.createElement('div');
    header.className = 'objective-header';
    header.innerHTML = `<span class="objective-icon">🎯</span> <h4>Objetivo de Módulo: Desafío Rápido</h4>`;
    card.appendChild(header);

    const questionP = document.createElement('p');
    questionP.style.fontSize = '0.95rem';
    questionP.style.fontWeight = '500';
    questionP.innerText = checkpoint.question;
    card.appendChild(questionP);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'objective-options';

    // Mezclar opciones para evitar memorización de posición
    const shuffledOptions = [...checkpoint.options].sort(() => 0.5 - Math.random());

    shuffledOptions.forEach(opt => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'obj-option';
        optionBtn.innerText = opt.text;

        if (opt.correct) {
            optionBtn.classList.add('correct');
        }

        optionBtn.addEventListener('click', () => {
            optionsDiv.querySelectorAll('.obj-option').forEach(btn => btn.classList.remove('selected'));
            optionBtn.classList.add('selected');
        });

        optionsDiv.appendChild(optionBtn);
    });

    card.appendChild(optionsDiv);
    container.appendChild(card);
}"""

replacement_render = """function renderCheckpoint(checkpoints) {
    const container = document.getElementById('checkpoint-container');
    container.innerHTML = '';
    
    if (!checkpoints || checkpoints.length === 0) return;

    // Shuffle and pick 5
    const shuffled = [...checkpoints].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    selected.forEach((cp, idx) => {
        const card = document.createElement('div');
        card.className = 'objective-card';
        card.style.marginBottom = '1.5rem';
        
        const header = document.createElement('div');
        header.className = 'objective-header';
        header.innerHTML = `<span class="objective-icon">🎯</span> <h4>Pregunta ${idx + 1} de 5</h4>`;
        card.appendChild(header);

        const questionP = document.createElement('p');
        questionP.style.fontSize = '0.95rem';
        questionP.style.fontWeight = '500';
        questionP.innerText = cp.question;
        card.appendChild(questionP);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'objective-options';

        const shuffledOptions = [...cp.options].sort(() => 0.5 - Math.random());

        shuffledOptions.forEach(opt => {
            const optionBtn = document.createElement('div');
            optionBtn.className = 'obj-option';
            optionBtn.innerText = opt.text;

            if (opt.correct) {
                optionBtn.classList.add('correct');
            }

            optionBtn.addEventListener('click', () => {
                optionsDiv.querySelectorAll('.obj-option').forEach(btn => btn.classList.remove('selected'));
                optionBtn.classList.add('selected');
            });

            optionsDiv.appendChild(optionBtn);
        });

        card.appendChild(optionsDiv);
        container.appendChild(card);
    });
}"""

if target_render in js:
    js = js.replace(target_render, replacement_render)
else:
    # Try regex if exact match fails
    js = re.sub(r'function renderCheckpoint\(checkpoint\)\s*\{[\s\S]*?container\.appendChild\(card\);\s*\}', replacement_render, js)


# 2. Update `hasCompletedCurrentCheckpoint`
target_has_completed = """function hasCompletedCurrentCheckpoint() {
    if (!modules[currentModuleIndex].checkpoint) return true;
    // Si el progreso general del alumno ya supera el umbral de este módulo, se considera autocompletado
    const threshold = ((currentModuleIndex + 1) / modules.length) * 100;
    if (currentUser.progress >= threshold - 1) {
        return true;
    }
    
    // Si no, verificamos si resolvió correctamente el checkpoint en pantalla
    const selectedCorrect = document.querySelector('.obj-option.correct.selected');
    return !!selectedCorrect;
}"""

replacement_has_completed = """function checkCheckpointScore() {
    if (!modules[currentModuleIndex].checkpoints) return { passed: true, score: 5, total: 5 };
    
    const threshold = ((currentModuleIndex + 1) / modules.length) * 100;
    if (currentUser.progress >= threshold - 1) {
        return { passed: true, score: 5, total: 5 }; // Already passed previously
    }
    
    const container = document.getElementById('checkpoint-container');
    const cards = container.querySelectorAll('.objective-card');
    let correctCount = 0;
    let answeredCount = 0;
    
    cards.forEach(card => {
        const selected = card.querySelector('.obj-option.selected');
        if (selected) answeredCount++;
        const selectedCorrect = card.querySelector('.obj-option.correct.selected');
        if (selectedCorrect) correctCount++;
    });
    
    return { 
        passed: correctCount >= 4, 
        score: correctCount, 
        total: cards.length,
        answeredAll: answeredCount === cards.length
    };
}"""

js = js.replace(target_has_completed, replacement_has_completed)


# 3. Update 'btn-next-module' click listener
target_next = """document.getElementById('btn-next-module').addEventListener('click', () => {
        if (currentModuleIndex < modules.length - 1) {
            // Validar si completó el checkpoint actual
            if (hasCompletedCurrentCheckpoint()) {
                if (!modules[currentModuleIndex].checkpoint) {
                    const newProgress = Math.max(currentUser.progress, ((currentModuleIndex + 1) / modules.length) * 100);
                    saveProgress(newProgress);
                }
                loadModule(currentModuleIndex + 1);
            } else {
                alert("Debes resolver correctamente el micro-desafío final para avanzar.");
            }
        }
    });"""

replacement_next = """document.getElementById('btn-next-module').addEventListener('click', () => {
        if (currentModuleIndex < modules.length - 1) {
            const result = checkCheckpointScore();
            if (result.passed) {
                if (!modules[currentModuleIndex].checkpoints) {
                    const newProgress = Math.max(currentUser.progress, ((currentModuleIndex + 1) / modules.length) * 100);
                    saveProgress(newProgress);
                }
                loadModule(currentModuleIndex + 1);
            } else {
                if (!result.answeredAll) {
                    alert("Por favor, responde todas las 5 preguntas antes de continuar.");
                } else {
                    alert(`Has obtenido ${result.score} de ${result.total}. Necesitas al menos 4 para avanzar. Las preguntas se han reiniciado. ¡Inténtalo de nuevo!`);
                    renderCheckpoint(modules[currentModuleIndex].checkpoints); // Reset questions
                }
            }
        }
    });"""
    
js = js.replace(target_next, replacement_next)

# Also update btn-start-exam
target_start = """document.getElementById('btn-start-exam').addEventListener('click', () => {
        if (!modules[modules.length - 1].checkpoint) {
            saveProgress(100);
        }
        
        if (hasCompletedCurrentCheckpoint()) {
            startExam();
        } else {
            alert("Resuelve el último micro-desafío para acceder al examen.");
        }
    });"""

replacement_start = """document.getElementById('btn-start-exam').addEventListener('click', () => {
        if (!modules[modules.length - 1].checkpoints) {
            saveProgress(100);
        }
        
        const result = checkCheckpointScore();
        if (result.passed) {
            startExam();
        } else {
            if (!result.answeredAll) {
                alert("Por favor, responde todas las 5 preguntas antes de continuar.");
            } else {
                alert(`Has obtenido ${result.score} de ${result.total}. Necesitas al menos 4 para acceder al examen. Las preguntas se han reiniciado. ¡Inténtalo de nuevo!`);
                renderCheckpoint(modules[currentModuleIndex].checkpoints); // Reset questions
            }
        }
    });"""
    
js = js.replace(target_start, replacement_start)

# 4. Replace `.checkpoint` with `.checkpoints` in isUnlocked logic and loadModule
js = js.replace('if (!mod.checkpoint) isUnlocked = true;', 'if (!mod.checkpoints) isUnlocked = true;')
js = js.replace('renderCheckpoint(mod.checkpoint);', 'renderCheckpoint(mod.checkpoints);')


# 5. Convert all module `checkpoint: { ... }` into `checkpoints: [ ... ]`
generic_questions = """
            ,
            {
                question: "¿Qué herramienta principal se utiliza para comprobar los números de préstamo y saldos?",
                options: [
                    { text: "SIBIS", correct: true },
                    { text: "Portal VALIDe", correct: false },
                    { text: "Gestor Documental (GD)", correct: false },
                    { text: "CertiPress", correct: false }
                ]
            },
            {
                question: "¿Qué portal se debe usar para validar una firma electrónica del cliente?",
                options: [
                    { text: "Portal VALIDe", correct: true },
                    { text: "SIBIS", correct: false },
                    { text: "SARA", correct: false },
                    { text: "SAOC", correct: false }
                ]
            },
            {
                question: "¿Qué departamento autoriza las excepciones de cancelaciones complejas o de una sola finca?",
                options: [
                    { text: "Dirección de Riesgos", correct: true },
                    { text: "SAOC", correct: false },
                    { text: "Atención al Cliente", correct: false },
                    { text: "Gestoría", correct: false }
                ]
            },
            {
                question: "¿Cómo se llama el archivo central de documentos donde encontramos la plantilla y escrituras?",
                options: [
                    { text: "Gestor Documental (GD)", correct: true },
                    { text: "SIBIS", correct: false },
                    { text: "Archivo Físico", correct: false },
                    { text: "VALIDe", correct: false }
                ]
            },
            {
                question: "¿Qué estado se debe asignar en el gestor si falta información o autorización?",
                options: [
                    { text: "Pendiente de Datos", correct: true },
                    { text: "Devolución Directa", correct: false },
                    { text: "Finalizado", correct: false },
                    { text: "Pendiente de SS.CC.", correct: false }
                ]
            },
            {
                question: "¿Cuál es el modelo oficial estándar general para una Solicitud de Certificado de Cancelación (SCC)?",
                options: [
                    { text: "ME-4329", correct: true },
                    { text: "ME-4328", correct: false },
                    { text: "ME-5325", correct: false },
                    { text: "ME-4286", correct: false }
                ]
            }"""

# Find all blocks like `checkpoint: { question: "...", options: [...] }`
pattern = re.compile(r'checkpoint:\s*(\{\s*question:[\s\S]*?options:\s*\[[\s\S]*?\]\s*\})')

def replacer(match):
    original_checkpoint = match.group(1)
    return f'checkpoints: [\n            {original_checkpoint}{generic_questions}\n        ]'

js = pattern.sub(replacer, js)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(js)

print("Checkpoints converted to 5-question logic")
