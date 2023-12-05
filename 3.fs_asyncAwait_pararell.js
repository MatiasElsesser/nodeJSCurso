const fs = require('node:fs/promises');

Promise.all([
  fs.readFile('./archivo.txt', 'utf-8'),
  fs.readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Primer texto: ', text)
  console.log('Segundo texto: ', secondText)
})

// con esto paralelizamos la asincronia 