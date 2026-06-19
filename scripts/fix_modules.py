import codecs
import re

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

# 1. Fix the titles in Módulo 5 (4.3 -> 5.3, etc.)
content = content.replace('title: "4.3 Solicitud del propietario actual"', 'title: "5.3 Solicitud del propietario actual"')
content = content.replace('title: "4.4 Hipoteca de máximos"', 'title: "5.4 Hipoteca de máximos"')
content = content.replace('title: "4.5 Préstamos en divisas"', 'title: "5.5 Préstamos en divisas"')
content = content.replace('title: "4.6 Solicitud de herederos"', 'title: "5.6 Solicitud de herederos"')
content = content.replace('title: "4.7 Contencioso (Consulta a SAOC)"', 'title: "5.7 Contencioso (Consulta a SAOC)"')
content = content.replace('title: "4.8 Subrogación de Acreedor"', 'title: "5.8 Subrogación de Acreedor"')
content = content.replace('title: "4.9 Subrogación de Deudor"', 'title: "5.9 Subrogación de Deudor"')
content = content.replace('title: "4.10 Fondo de comercio"', 'title: "5.10 Fondo de comercio"')

# 2. Fix tags. We'll find all `tag: "Lección X"` and rewrite them sequentially starting from Lección 1.
# But wait, there are also "Anexo" tags. 
# We just need to make sure the tags don't duplicate.
# Currently, "4.1 Pólizas" has tag: "Lección 5".
# "5.1 Hipoteca personal" has tag: "Lección 5".
# "5.2" has "Lección 6", and so on.
# "5.1 Préstamos NO Hipotecarios" (the old one) had "Lección 15".
# If I delete the old one, and shift the tags of Modulo 5 by +1, they will be unique.
content = content.replace('tag: "Lección 15"', 'tag: "Lección 16"') # temporarily
content = content.replace('tag: "Lección 14"', 'tag: "Lección 15"')
content = content.replace('tag: "Lección 13"', 'tag: "Lección 14"')
content = content.replace('tag: "Lección 12"', 'tag: "Lección 13"')
content = content.replace('tag: "Lección 11"', 'tag: "Lección 12"')
content = content.replace('tag: "Lección 10"', 'tag: "Lección 11"')
content = content.replace('tag: "Lección 9"', 'tag: "Lección 10"')
content = content.replace('tag: "Lección 8"', 'tag: "Lección 9"')
content = content.replace('tag: "Lección 7"', 'tag: "Lección 8"')
content = content.replace('tag: "Lección 6"', 'tag: "Lección 7"')
content = content.replace('title: "5.1 Hipoteca personal (Línea)",\n        tag: "Lección 5"', 'title: "5.1 Hipoteca personal (Línea)",\n        tag: "Lección 6"')

# 3. Delete the old Módulo 5: PH NO HIPOTECARIO
# It starts at `    ,\n    {\n        moduleGroup: "Módulo 5: PH NO HIPOTECARIO"`
# and ends before `Plantillas de Resolución`
match = re.search(r'\s*,\s*\{\s*moduleGroup:\s*"Módulo 5: PH NO HIPOTECARIO".*?(?=\s*,\s*\{\s*moduleGroup:\s*"Plantillas de Resolución")', content, flags=re.DOTALL)
if match:
    content = content[:match.start()] + content[match.end():]
else:
    print("WARNING: Could not find old Módulo 5 to delete")

with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
    f.write(content)

print("Modules and tags fixed")
