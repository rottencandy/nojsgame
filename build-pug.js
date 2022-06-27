const pug = require('pug');
const fs = require('fs');

const compileFunc = pug.compileFile('src/main.pug');
const content = compileFunc();

fs.writeFile('./index.html', content, (e) => { e && console.error('Unable to save: ', e); });
