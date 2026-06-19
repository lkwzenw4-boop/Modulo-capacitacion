import codecs
import re

app_js_path = 'src/js/app.js'

with codecs.open(app_js_path, 'r', 'utf-8') as f:
    js = f.read()

target = """    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            const term = normalize(e.target.value);
            const navItems = document.querySelectorAll('.module-nav-item');
            
            navItems.forEach((item, index) => {
                const mod = modules[index];
                const matchesTitle = normalize(mod.title).includes(term);
                const matchesContent = normalize(mod.content).includes(term);
                
                if (matchesTitle || matchesContent) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }"""

replacement = """    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                const term = normalize(e.target.value);
                const navItems = document.querySelectorAll('.module-nav-item');
                
                navItems.forEach((item, index) => {
                    const mod = modules[index];
                    const matchesTitle = normalize(mod.title).includes(term);
                    const matchesContent = normalize(mod.content).includes(term);
                    
                    if (matchesTitle || matchesContent) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }, 300); // 300ms debounce
        });
    }"""

if target in js:
    js = js.replace(target, replacement)
    with codecs.open(app_js_path, 'w', 'utf-8') as f:
        f.write(js)
    print("Debounce implemented successfully")
else:
    # Try regex if slight formatting difference
    js_new = re.sub(r'const searchInput = document\.getElementById\(\'global-search-input\'\);\s*if \(searchInput\) \{\s*searchInput\.addEventListener\(\'input\', \(e\) => \{[\s\S]*?\}\);\s*\}', replacement, js)
    if js != js_new:
        with codecs.open(app_js_path, 'w', 'utf-8') as f:
            f.write(js_new)
        print("Debounce implemented via Regex")
    else:
        print("Failed to find target block")
