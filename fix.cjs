const fs = require('fs');
const path = require('path');
const dirs = [
  'c:/Users/tamba/Downloads/indexxxx/edu/src/components/home-page/panels', 
  'c:/Users/tamba/Downloads/indexxxx/edu/src/components/home-page/layout', 
  'c:/Users/tamba/Downloads/indexxxx/edu/src/components/home-page'
];

dirs.forEach(dir => {
  fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(f => {
    const p = path.join(dir, f);
    let c = fs.readFileSync(p, 'utf8');
    let nc = c.replace(/\\`/g, '`').replace(/\\\$/g, '$');
    if(c !== nc) {
      fs.writeFileSync(p, nc);
      console.log('Fixed', p);
    }
  });
});
