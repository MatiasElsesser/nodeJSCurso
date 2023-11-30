const fs = require('node:fs')

// const text = fs.readFileSync('./archivo.txt', 'utf-8') 
// esto solo devuelve un buffer  con los bytes de cada caracter, por eso el segundo parametro con la codigicacion

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
}) 
// readFile es la manera asincrona de leer archivos y hacepta como tercer parametro un callback, para asegurarse de que hacer cuando termina el proceso de leer el archivo

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
}) 

// esto es importante, ya que no detiene el proceso principal