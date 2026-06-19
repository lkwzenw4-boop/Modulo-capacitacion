import codecs

with codecs.open('app.js', 'r', 'utf-8') as f:
    content = f.read()

content = content.replace('moduleGroup: "Módulo 6: Plantillas de Resolución",', 'moduleGroup: "Plantillas de Resolución",')
content = content.replace('title: "6.1 Coletillas de Finalización",', 'title: "Coletillas de Finalización",')

content = content.replace('moduleGroup: "Módulo 7: Glosario de Términos",', 'moduleGroup: "Glosario de Términos",')
content = content.replace('title: "7.1 Diccionario Hipotecario",', 'title: "Diccionario Hipotecario",')

target_js = """    modules.forEach((mod, i) => {
        const groupName = mod.moduleGroup;
        if (!groupTimes[groupName]) {"""

replacement_js = """    modules.forEach((mod, i) => {
        const groupName = mod.moduleGroup;
        if (groupName === "Plantillas de Resolución" || groupName === "Glosario de Términos") return;
        if (!groupTimes[groupName]) {"""

content = content.replace(target_js, replacement_js)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(content)
print("Changes applied successfully!")
