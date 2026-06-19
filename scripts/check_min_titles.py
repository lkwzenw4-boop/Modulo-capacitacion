import re
content=open('src/js/data.min.js', encoding='utf-8').read()
titles = re.findall(r'title:\s*\"(.*?)\"', content)
print('\n'.join(f'{i}: {t}' for i, t in enumerate(titles)))
