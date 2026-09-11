from pathlib import Path
p=Path('global-nav.js')
text=p.read_text()
old="const ROOT = 'https://its-ez.com/';"
count=text.count(old)
if count < 3:
    raise SystemExit(f'Expected at least 3 ROOT declarations, found {count}')
new="const ROOT = (location.hostname.includes('githack.com') || location.hostname.includes('github.io')) ? location.href.replace(/[^/]*(?:[?#].*)?$/, '') : 'https://its-ez.com/';"
text=text.replace(old,new)
needle='@media(max-width:1180px){\n      .ez-global-links>.ez-nav-group{display:block;width:100%}'
replacement='@media(max-width:1180px){\n      .ez-global-links>.ez-nav-group{display:block;width:100%;grid-column:1/-1}'
if needle not in text:
    raise SystemExit('Mobile resources group CSS target not found')
text=text.replace(needle,replacement,1)
p.write_text(text)
