import codecs
import re

with codecs.open('app.js', 'r', 'utf-8') as f:
    content = f.read()

# Removing checkpoint for Plantillas (Leasing question)
pattern1 = r',\s*checkpoint:\s*\{\s*question:\s*"[^"]*Préstamo Leasing\?",\s*options:\s*\[[\s\S]*?\]\s*\}'
content = re.sub(pattern1, '', content)

# Removing checkpoint for Glosario (Finca Registral question)
pattern2 = r',\s*checkpoint:\s*\{\s*question:\s*"[^"]*Finca Registral\?",\s*options:\s*\[[\s\S]*?\]\s*\}'
content = re.sub(pattern2, '', content)

# Also support matching just 'checkpoint: {' and ending '}' inside the module
# Let's use a simpler string replace since we know the exact text (with possible encoding chars, so let's use a robust approach)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(content)

print("Checkpoints removed successfully")
