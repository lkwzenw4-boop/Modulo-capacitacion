import codecs
import re

with codecs.open('app.js', 'r', 'utf-8') as f:
    js = f.read()

target = """function renderCheckpoint(checkpoints) {
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

replacement = """function renderCheckpoint(checkpoints) {
    const container = document.getElementById('checkpoint-container');
    container.innerHTML = '';
    
    if (!checkpoints || checkpoints.length === 0) return;

    const shuffled = [...checkpoints].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    
    const carouselWrapper = document.createElement('div');
    carouselWrapper.className = 'carousel-wrapper';
    
    const cards = [];
    let currentIndex = 0;

    selected.forEach((cp, idx) => {
        const card = document.createElement('div');
        card.className = 'objective-card';
        card.style.marginBottom = '1rem';
        card.style.display = idx === 0 ? 'block' : 'none';
        
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
                
                // Opcional: auto-avanzar al hacer clic
                // setTimeout(() => nextBtn.click(), 400); 
            });

            optionsDiv.appendChild(optionBtn);
        });

        card.appendChild(optionsDiv);
        cards.push(card);
        carouselWrapper.appendChild(card);
    });
    
    const navControls = document.createElement('div');
    navControls.style.display = 'flex';
    navControls.style.justifyContent = 'space-between';
    navControls.style.marginTop = '0.5rem';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn-secondary';
    prevBtn.innerHTML = '← Anterior';
    prevBtn.style.visibility = 'hidden';
    prevBtn.style.padding = '0.5rem 1rem';
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-secondary';
    nextBtn.innerHTML = 'Siguiente →';
    nextBtn.style.padding = '0.5rem 1rem';
    
    const updateCarousel = () => {
        cards.forEach((c, i) => {
            c.style.display = i === currentIndex ? 'block' : 'none';
        });
        prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = currentIndex === cards.length - 1 ? 'hidden' : 'visible';
    };
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    navControls.appendChild(prevBtn);
    navControls.appendChild(nextBtn);
    carouselWrapper.appendChild(navControls);
    
    container.appendChild(carouselWrapper);
}"""

if target in js:
    js = js.replace(target, replacement)
else:
    print("No se encontro coincidencia exacta, intentando Regex")
    js = re.sub(r'function renderCheckpoint\(checkpoints\) \{[\s\S]*?container\.appendChild\(card\);\s*\}\s*\}', replacement, js)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(js)

print("Carousel applied")
