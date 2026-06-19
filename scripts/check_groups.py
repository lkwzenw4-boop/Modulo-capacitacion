import re
content=open('src/js/data.js', encoding='utf-8').read()
groups = re.findall(r'moduleGroup:\s*\"(.*?)\"', content)
print('\n'.join(f'{i}: {g}' for i, g in enumerate(groups)))
