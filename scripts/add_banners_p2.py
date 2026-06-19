import codecs

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

banner = """<div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 2rem; text-align: center; font-weight: 500; letter-spacing: 2px;">[ INICIO DEL TRÁMITE ]</div>"""
arrow_first = """<div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin-bottom: 1rem;">↓</div>"""
arrow_between = """<div style="text-align: center; color: var(--primary-light); font-size: 1.5rem; margin: 1.5rem 0 1rem 0;">↓</div>"""

content = content.replace('<h4>PARTE 1 — A LA CAZA DEL TRÁMITE (Asignación)</h4>', banner + '\n\n' + arrow_first + '\n\n' + '<h4>PARTE 1 — A LA CAZA DEL TRÁMITE (Asignación)</h4>')
content = content.replace('<h4>PARTE 2 — MODO DETECTIVE (Validación del Préstamo)</h4>', arrow_between + '\n\n' + '<h4>PARTE 2 — MODO DETECTIVE (Validación del Préstamo)</h4>')
content = content.replace('<h4>PARTE 3 — ELIGIENDO EL MOLDE CORRECTO</h4>', arrow_between + '\n\n' + '<h4>PARTE 3 — ELIGIENDO EL MOLDE CORRECTO</h4>')
content = content.replace('<h4>PARTE 4 — CREACIÓN DEL DOCUMENTO OFICIAL</h4>', arrow_between + '\n\n' + '<h4>PARTE 4 — CREACIÓN DEL DOCUMENTO OFICIAL</h4>')
content = content.replace('<h4>PARTE 5 — CIERRE CON BROCHE DE ORO</h4>', arrow_between + '\n\n' + '<h4>PARTE 5 — CIERRE CON BROCHE DE ORO</h4>')

with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
    f.write(content)

print("Added banners to Modulo 1.1")
