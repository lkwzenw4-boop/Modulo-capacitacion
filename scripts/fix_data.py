import codecs
import re

with codecs.open('src/js/data.js', 'r', 'utf-8') as f:
    content = f.read()

# Replace the text
content = content.replace('esperando documentación por <strong>7 días hábiles</strong>, procede a cerrarlo o devolverlo <strong>empezando el día</strong> (en la mañana del día 8)', 'esperando documentación por <strong>6 días hábiles</strong>, procede a cerrarlo o devolverlo <strong>empezando el día</strong> (en la mañana del día 7)')

# Replace the group
content = content.replace('moduleGroup: "Guía Transversal: Auditoría y Mejores Prácticas"', 'moduleGroup: "Módulo 0: Introducción al Sistema"')

# Now I need to extract the new module from the end of the `modules` array and insert it at index 1
# The block to move starts with `    ,\n    {\n        moduleGroup: "Módulo 0: Introducción al Sistema",\n        title: "Auditoría y Emisión"`
# And ends with `        ]\n    }\n];`

match = re.search(r'(\s*,\s*\{\s*moduleGroup:\s*"Módulo 0: Introducción al Sistema",\s*title:\s*"Auditoría y Emisión".*?\]\s*\})(\s*\];)', content, flags=re.DOTALL)
if match:
    block_to_move = match.group(1)
    end_brackets = match.group(2)
    
    # Remove from end
    content = content[:match.start()] + end_brackets + content[match.end():]
    
    # Insert right after the first module block.
    # The first module ends with `    },\n{` or similar. Let's find the first `    },`
    first_module_end = re.search(r'\}\s*,\s*\{\s*moduleGroup:', content)
    if first_module_end:
        insert_idx = first_module_end.start() + 1
        content = content[:insert_idx] + block_to_move + content[insert_idx:]
    else:
        print("Could not find first module end.")
else:
    print("Could not find block to move.")

with codecs.open('src/js/data.js', 'w', 'utf-8') as f:
    f.write(content)
print("Changes applied!")
