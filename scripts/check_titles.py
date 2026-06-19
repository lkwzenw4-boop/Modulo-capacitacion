import codecs
import re

content = codecs.open('src/js/data.js', 'r', 'utf-8').read()
titles = re.findall(r'title:\s*\"(.*?)\"', content)
print('\n'.join([f'{i}: {t}' for i, t in enumerate(titles)]))
