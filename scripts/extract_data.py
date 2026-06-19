import codecs

app_js_path = 'src/js/app.js'
data_js_path = 'src/js/data.js'
index_html_path = 'index.html'

with codecs.open(app_js_path, 'r', 'utf-8') as f:
    js_content = f.read()

# Find split points
modules_start_str = "// --- CONFIGURACIÓN DEL CURSO Y CONTENIDOS ---\nconst modules = ["
# The regex / string approach might fail if line endings are \r\n
modules_start_str = "// --- CONFIGURACIÓN DEL CURSO Y CONTENIDOS ---"
state_start_str = "// --- ESTADO GLOBAL DE LA APLICACIÓN ---"

if modules_start_str in js_content and state_start_str in js_content:
    modules_start_idx = js_content.find(modules_start_str)
    state_start_idx = js_content.find(state_start_str)
    
    # Extract data part
    data_part = js_content[modules_start_idx:state_start_idx]
    
    # Write to data.js
    with codecs.open(data_js_path, 'w', 'utf-8') as f:
        f.write(data_part)
        
    # Remove from app.js
    new_app_js = js_content[:modules_start_idx] + js_content[state_start_idx:]
    
    with codecs.open(app_js_path, 'w', 'utf-8') as f:
        f.write(new_app_js)
    
    print("Successfully extracted data.js")
    
    # Update index.html
    with codecs.open(index_html_path, 'r', 'utf-8') as f:
        html_content = f.read()
        
    if '<script src="src/js/data.js"></script>' not in html_content:
        html_content = html_content.replace(
            '<script src="src/js/app.js"></script>',
            '<script src="src/js/data.js"></script>\n    <script src="src/js/app.js"></script>'
        )
        with codecs.open(index_html_path, 'w', 'utf-8') as f:
            f.write(html_content)
        print("Updated index.html")
else:
    print("Could not find split points")
