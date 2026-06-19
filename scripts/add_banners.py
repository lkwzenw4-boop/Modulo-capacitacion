import re
import codecs

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

# Define the HTML snippets
banner = """<div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 2rem; text-align: center; font-weight: 500; letter-spacing: 2px;">[ INICIO DEL TRÁMITE ]</div>"""
arrow_first = """<div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin-bottom: 1rem;">↓</div>"""
arrow_between = """<div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>"""

# For Modulo 3.1 "Préstamos anteriores a 2006", we have `<h4>Fase 1...` to `<h4>Fase 4...`
# For Modulo 0 "Auditoría y Emisión", we have `<h4>Triaje y Clasificación del Trámite</h4>` etc.
# For others, we might have `<h4>` or similar. Let's see what `data.js` uses.
# I will just write a specific replacement for the known sections to avoid breaking HTML randomly.

# Modulo 3.1: Préstamos anteriores a 2006
content = content.replace('<h4>Fase 1:', banner + '\n\n' + arrow_first + '\n\n' + '<h4>Fase 1:')
content = content.replace('<h4>Fase 2:', arrow_between + '\n\n' + '<h4>Fase 2:')
content = content.replace('<h4>Fase 3:', arrow_between + '\n\n' + '<h4>Fase 3:')
content = content.replace('<h4>Fase 4:', arrow_between + '\n\n' + '<h4>Fase 4:')

# Modulo 0: Auditoría y Emisión
# Headers: Triaje y Clasificación del Trámite, Reglas de Confidencialidad, Lectura Estratégica de Escrituras, Cierre, Formato y Emisión
content = content.replace('<h4>Triaje y Clasificación del Trámite</h4>', banner + '\n\n' + arrow_first + '\n\n' + '<h4>Triaje y Clasificación del Trámite</h4>')
content = content.replace('<h4>Reglas de Confidencialidad</h4>', arrow_between + '\n\n' + '<h4>Reglas de Confidencialidad</h4>')
content = content.replace('<h4>Lectura Estratégica de Escrituras (La Prueba de Fuego)</h4>', arrow_between + '\n\n' + '<h4>Lectura Estratégica de Escrituras (La Prueba de Fuego)</h4>')
content = content.replace('<h4>Cierre, Formato y Emisión</h4>', arrow_between + '\n\n' + '<h4>Cierre, Formato y Emisión</h4>')

# Let's inspect other modules by finding all <h4> or <h3> tags to see if they need arrows.
# We'll dump them to a file to read.
with codecs.open('headers_dump.txt', 'w', 'utf-8') as f:
    f.write('\n'.join(re.findall(r'<h[34].*?>.*?</h[34]>', content)))

with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
    f.write(content)

print("Done phase 1 replacements")
