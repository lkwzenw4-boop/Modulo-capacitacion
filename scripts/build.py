import codecs
import re
import os

# Antes esto era una ruta absoluta de Windows quemada ("C:\Users\kevin\..."),
# lo cual rompía el script en cualquier otra máquina o carpeta.
# Ahora se calcula automáticamente la raíz del proyecto (un nivel arriba de /scripts).
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def minify_css(css):
    # Remove comments
    css = re.sub(r'/\*[\s\S]*?\*/', '', css)
    # Remove newlines and tabs
    css = css.replace('\n', '').replace('\r', '').replace('\t', '')
    # Remove extra spaces
    css = re.sub(r'\s+', ' ', css)
    # Remove spaces around tokens
    css = re.sub(r'\s*([\{\}\:\;\,\>])\s*', r'\1', css)
    return css.strip()

def minify_js_safe(js):
    lines = js.split('\n')
    min_lines = []
    in_multiline_comment = False
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Super basic multi-line comment removal
        if line.startswith('/*'):
            in_multiline_comment = True
        
        if in_multiline_comment:
            if '*/' in line:
                in_multiline_comment = False
            continue
            
        # Basic single line comment removal (unsafe for strings, but usually fine at start of line)
        if line.startswith('//'):
            continue
            
        min_lines.append(line)
    
    return '\n'.join(min_lines)

# Minify CSS
with codecs.open(os.path.join(base_dir, 'src/css/styles.css'), 'r', 'utf-8') as f:
    css_content = f.read()

min_css = minify_css(css_content)
with codecs.open(os.path.join(base_dir, 'src/css/styles.min.css'), 'w', 'utf-8') as f:
    f.write(min_css)
print("Minified styles.css")

# Minify JS (data.js)
with codecs.open(os.path.join(base_dir, 'src/js/data.js'), 'r', 'utf-8') as f:
    data_js_content = f.read()

min_data_js = minify_js_safe(data_js_content)
with codecs.open(os.path.join(base_dir, 'src/js/data.min.js'), 'w', 'utf-8') as f:
    f.write(min_data_js)
print("Minified data.js")

# Minify JS (app.js)
with codecs.open(os.path.join(base_dir, 'src/js/app.js'), 'r', 'utf-8') as f:
    app_js_content = f.read()

min_app_js = minify_js_safe(app_js_content)
with codecs.open(os.path.join(base_dir, 'src/js/app.min.js'), 'w', 'utf-8') as f:
    f.write(min_app_js)
print("Minified app.js")

# Update index.html
with codecs.open(os.path.join(base_dir, 'index.html'), 'r', 'utf-8') as f:
    html = f.read()

html = html.replace('src/css/styles.css', 'src/css/styles.min.css')
html = html.replace('src/js/data.js', 'src/js/data.min.js')
html = html.replace('src/js/app.js', 'src/js/app.min.js')

with codecs.open(os.path.join(base_dir, 'index.html'), 'w', 'utf-8') as f:
    f.write(html)
print("Updated index.html to use minified files")
