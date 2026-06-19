import codecs
import re

with codecs.open('src/js/app.js', 'r', 'utf-8', errors='ignore') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if "item.innerHTML =" in line and "mod.title" in line and "locked" in line:
        continue # we will just match the bad line using re on the whole thing later, no wait, let's just do it cleanly

with codecs.open('src/js/app.js', 'r', 'utf-8', errors='ignore') as f:
    content = f.read()

# Replace any line containing `item.innerHTML =` and `mod.title` that is inside the `if (!isUnlocked)` block
# We know it comes right after `item.classList.add('locked');`
content = re.sub(
    r"item\.classList\.add\('locked'\);\s*item\.innerHTML = .*?`.*?mod\.title.*?`;",
    "item.classList.add('locked');\n            item.innerHTML = `<span class=\"dot\"></span> [BLOQUEADO] ${mod.title}`;",
    content,
    flags=re.DOTALL
)

with codecs.open('src/js/app.js', 'w', 'utf-8') as f:
    f.write(content)
