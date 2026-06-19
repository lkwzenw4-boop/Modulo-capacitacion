import codecs
import re

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

# I need to find the missing comma before Módulo 5.
# Specifically, we are looking for `}\n    {\n        moduleGroup: "Módulo 5: RESTO DE MODELOS"`
# or similar whitespace

content = re.sub(r'\}\s*\{\s*moduleGroup:\s*"Módulo 5: RESTO DE MODELOS"', r'},\n    {\n        moduleGroup: "Módulo 5: RESTO DE MODELOS"', content)

with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
    f.write(content)

print("Fixed comma")
