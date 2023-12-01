// para no utilizar callback llamamos al metodo fs desde fs/promises
const fs = require('node:fs/promises');


console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8') 
  .then(res => console.log(res));

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8') 
  .then(res => console.log(res));


// el await solo funciona en funciones asincronas, o cambiando a ESModules
// IIFE - Inmediatly Invoked Function Expression
(
  async () => {
  const text = await fs.readFile('./archivo.txt','utf-8')
  console.log(text)
})()
