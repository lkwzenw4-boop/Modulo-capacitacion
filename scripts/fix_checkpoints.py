import codecs

with codecs.open('app.js', 'r', 'utf-8') as f:
    content = f.read()

# Fix renderCheckpoint
target1 = """function renderCheckpoint(checkpoint) {
    const container = document.getElementById('checkpoint-container');
    container.innerHTML = '';

    const card = document.createElement('div');"""

replacement1 = """function renderCheckpoint(checkpoint) {
    const container = document.getElementById('checkpoint-container');
    container.innerHTML = '';
    
    if (!checkpoint) return; // Si no hay checkpoint, no renderizar nada

    const card = document.createElement('div');"""

# Fix hasCompletedCurrentCheckpoint
target2 = """function hasCompletedCurrentCheckpoint() {
    // Si el progreso general del alumno ya supera el umbral de este mdulo, se considera autocompletado
    const threshold = ((currentModuleIndex + 1) / modules.length) * 100;
    if (currentUser.progress >= threshold - 1) {
        return true;
    }"""
# Note: dealing with encoding chars in target2... let's just use replace with a smaller substring or regex
import re
content = re.sub(
    r'function hasCompletedCurrentCheckpoint\(\) \{[\s\n]*//.*?autocompletado[\s\n]*const threshold',
    'function hasCompletedCurrentCheckpoint() {\n    if (!modules[currentModuleIndex].checkpoint) return true;\n    // Si el progreso general del alumno ya supera el umbral de este módulo, se considera autocompletado\n    const threshold',
    content
)

# Fix btn-next-module
content = re.sub(
    r'if \(hasCompletedCurrentCheckpoint\(\)\) \{[\s\n]*loadModule\(currentModuleIndex \+ 1\);',
    'if (hasCompletedCurrentCheckpoint()) {\n                if (!modules[currentModuleIndex].checkpoint) {\n                    const newProgress = Math.max(currentUser.progress, ((currentModuleIndex + 1) / modules.length) * 100);\n                    saveProgress(newProgress);\n                }\n                loadModule(currentModuleIndex + 1);',
    content
)

# Fix btn-start-exam
content = re.sub(
    r"document\.getElementById\('btn-start-exam'\)\.addEventListener\('click', \(\) => \{[\s\n]*if \(currentUser\.progress >= 99\) \{",
    "document.getElementById('btn-start-exam').addEventListener('click', () => {\n        if (!modules[modules.length - 1].checkpoint) {\n            saveProgress(100);\n        }\n        if (currentUser.progress >= 99) {",
    content
)

content = content.replace(target1, replacement1)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(content)

print("Checkpoint logic fixed")
