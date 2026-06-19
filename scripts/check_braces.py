import codecs
with codecs.open('src/js/app.js', 'r', 'utf-8', errors='ignore') as f:
    content = f.read()
print(f'open braces: {content.count("{")}')
print(f'close braces: {content.count("}")}')
print(f'open parens: {content.count("(")}')
print(f'close parens: {content.count(")")}')
