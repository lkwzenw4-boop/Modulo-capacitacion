"""
Actualiza el parámetro de cache-busting (?v=...) de los archivos minificados en index.html.

Antes este script fijaba siempre el mismo valor (?v=4), por lo que en realidad
NUNCA invalidaba la caché del navegador tras una actualización de contenido.
Ahora usa un timestamp único en cada ejecución, garantizando que el navegador
descargue siempre la versión más reciente después de un cambio.

Uso: correr después de cada build (python scripts/cache_bust.py)
"""
import re
import time
import os

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
index_path = os.path.join(base_dir, "index.html")

version = int(time.time())

html = open(index_path, encoding='utf-8').read()
html = re.sub(r'\.min\.js(\?v=\d+)?"', f'.min.js?v={version}"', html)
html = re.sub(r'\.min\.css(\?v=\d+)?"', f'.min.css?v={version}"', html)
open(index_path, 'w', encoding='utf-8').write(html)

print(f"Cache-busting actualizado a v={version}")
