const pug = require('pug');

const path = require('path');

// Compile the source code
const compiledFunction = pug.compileFile(path.join(__dirname, 'templates' , 'template.pug'));

// Render a set of data
console.log(compiledFunction({
  name: 'PUG'
}));