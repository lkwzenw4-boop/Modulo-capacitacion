import re
import os

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(base_dir, 'src/js/data.js')

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Expresión regular para buscar la cabecera y la lista desordenada subsiguiente
pattern = r'<h4>Errores comunes a evitar</h4>\s*<ul>([\s\S]*?)</ul>'

# Reemplazar por la estructura de alert-warning (que en CSS tiene borde rojo y título rojo)
replacement = r'<div class="alert-warning"><div class="alert-title">Errores comunes a evitar</div><ul>\1</ul></div>'

new_content, count = re.subn(pattern, replacement, content)

print(f"Se han realizado {count} reemplazos.")

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Archivo data.js guardado correctamente.")
