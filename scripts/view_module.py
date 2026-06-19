"""
Utilidad de inspección: muestra el contenido HTML crudo de una lección de data.js
buscando por su título (o parte de él), para revisarla rápido sin abrir todo el archivo.

Uso:
    python scripts/view_module.py "3.1 Préstamos anteriores a 2006"
    python scripts/view_module.py "Actual Propietario"   (coincidencia parcial también funciona)
"""
import codecs
import re
import sys
import os

if len(sys.argv) < 2:
    print("Uso: python view_module.py \"<título o parte del título>\"")
    sys.exit(1)

search_term = re.escape(sys.argv[1])
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(base_dir, "src", "js", "data.js")

with codecs.open(data_path, "r", "utf-8") as f:
    content = f.read()

pattern = r'title:\s*"([^"]*' + search_term + r'[^"]*)".*?content:\s*`(.*?)`\s*,?\s*checkpoints?:'
match = re.search(pattern, content, flags=re.DOTALL)

if match:
    print(f"--- {match.group(1)} ---\n")
    print(match.group(2))
else:
    print(f"No se encontró ninguna lección que coincida con: {sys.argv[1]}")
