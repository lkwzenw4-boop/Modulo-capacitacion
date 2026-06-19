import codecs

with codecs.open('app.js', 'r', 'utf-8') as f:
    js = f.read()

target = """    // Global Search
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const navItems = document.querySelectorAll('.module-nav-item');
            
            navItems.forEach((item, index) => {
                const mod = modules[index];
                const matchesTitle = mod.title.toLowerCase().includes(term);
                const matchesContent = mod.content.toLowerCase().includes(term);
                
                if (matchesTitle || matchesContent) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide headers based on visibility of children (simplified approach: just show all headers for now)
        });
    }"""

replacement = """    // Global Search
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const normalize = str => str.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").toLowerCase();
            const term = normalize(e.target.value);
            const navItems = document.querySelectorAll('.module-nav-item');
            
            navItems.forEach((item, index) => {
                const mod = modules[index];
                const matchesTitle = normalize(mod.title).includes(term);
                const matchesContent = normalize(mod.content).includes(term);
                
                if (matchesTitle || matchesContent) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide group headers
            const groupHeaders = document.querySelectorAll('.module-nav-header');
            groupHeaders.forEach(header => {
                const groupName = header.innerText;
                const hasVisibleModule = modules.some((mod, index) => {
                    return mod.moduleGroup === groupName && navItems[index].style.display === 'block';
                });
                header.style.display = hasVisibleModule ? 'block' : 'none';
            });
        });
    }"""

js = js.replace(target, replacement)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(js)

print("Search logic updated")
