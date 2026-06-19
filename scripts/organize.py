import os
import shutil
import codecs

base_dir = "C:\\Users\\kevin\\.gemini\\antigravity\\scratch\\Modulo capacitacion"

# Create directories
dirs_to_create = [
    os.path.join(base_dir, "src", "css"),
    os.path.join(base_dir, "src", "js"),
    os.path.join(base_dir, "scripts"),
    os.path.join(base_dir, "docs")
]

for d in dirs_to_create:
    os.makedirs(d, exist_ok=True)

# Move python scripts and build tools
for f in os.listdir(base_dir):
    if f.endswith('.py') or f == 'build_script.js':
        src = os.path.join(base_dir, f)
        dst = os.path.join(base_dir, "scripts", f)
        if os.path.isfile(src):
            shutil.move(src, dst)

# Move docs
if os.path.exists(os.path.join(base_dir, "glosario_temp.txt")):
    shutil.move(os.path.join(base_dir, "glosario_temp.txt"), os.path.join(base_dir, "docs", "glosario_temp.txt"))

# Move assets (app.js, styles.css)
if os.path.exists(os.path.join(base_dir, "styles.css")):
    shutil.move(os.path.join(base_dir, "styles.css"), os.path.join(base_dir, "src", "css", "styles.css"))

if os.path.exists(os.path.join(base_dir, "app.js")):
    shutil.move(os.path.join(base_dir, "app.js"), os.path.join(base_dir, "src", "js", "app.js"))

# Update index.html paths
index_path = os.path.join(base_dir, "index.html")
if os.path.exists(index_path):
    with codecs.open(index_path, 'r', 'utf-8') as f:
        html = f.read()
    
    html = html.replace('href="styles.css"', 'href="src/css/styles.css"')
    html = html.replace('src="app.js"', 'src="src/js/app.js"')
    
    with codecs.open(index_path, 'w', 'utf-8') as f:
        f.write(html)

print("Project structure organized.")
