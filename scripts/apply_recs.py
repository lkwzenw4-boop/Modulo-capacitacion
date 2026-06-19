import codecs

# 1. Update HTML
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = html.replace('<div class="logo-icon">BS</div>', '<button id="btn-sidebar-toggle" class="btn btn-secondary mobile-only" style="margin-right: 0.5rem; padding: 0.25rem 0.5rem; font-size: 1.2rem;">☰</button>\n                  <div class="logo-icon">BS</div>')

html = html.replace('<nav id="module-list-container" class="module-list"></nav>', '<div class="sidebar-search" style="padding: 1rem 1.5rem 0 1.5rem;">\n                        <input type="text" id="global-search-input" placeholder="🔍 Buscar términos..." style="width: 100%; padding: 0.6rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: var(--text-main); font-family: inherit; margin-bottom: 0.5rem;">\n                    </div>\n                    <nav id="module-list-container" class="module-list"></nav>')

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)

# 2. Update CSS
with codecs.open('styles.css', 'a', 'utf-8') as f:
    f.write('''
/* Responsive Sidebar & Search */
.mobile-only {
    display: none !important;
}

@media (max-width: 900px) {
    .mobile-only {
        display: inline-flex !important;
    }
    .app-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 85%;
        max-width: 350px;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        box-shadow: 2px 0 10px rgba(0,0,0,0.5);
    }
    .app-sidebar.open {
        transform: translateX(0);
    }
    .app-layout {
        grid-template-columns: 1fr;
    }
    .sidebar-search input {
        font-size: 16px; /* Evita auto-zoom en iOS */
    }
    
    /* Improve padding on mobile */
    .app-main {
        padding: 1rem;
    }
}
''')

# 3. Update app.js
with codecs.open('app.js', 'r', 'utf-8') as f:
    js = f.read()

search_js = '''
    // Sidebar toggle (mobile)
    const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');
    const sidebar = document.querySelector('.app-sidebar');
    if (btnSidebarToggle && sidebar) {
        btnSidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
    
    // Global Search
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
    }
'''

js = js.replace('function setupEventListeners() {', 'function setupEventListeners() {\n' + search_js)

js = js.replace("loadModule(index);\n            });", "loadModule(index);\n                if (window.innerWidth <= 900) { document.querySelector('.app-sidebar').classList.remove('open'); }\n            });")

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(js)

print("Recommendations 1 and 4 applied.")
