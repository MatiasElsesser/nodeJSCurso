const path = require('node:path')

console.log(path.sep) // devuelve la separacion de nuestro sistema operativo (barra \ en windows)

// unir rutas con join, las une dependiendo el sistema operativo y la separacion que usa el mismo
const filePath = path.join('content', 'subFolder', 'test.txt')
console.log(filePath)

// nombre de un archivo en la ruta dada
// recibe un segundo parametro para quitar la extension
const base = path.basename(path.join('tmp', 'mati', 'secretFiles', 'password.txt'), '.txt')
console.log(base)

// extencion de un archivo
const extension = path.extname('image.png')
console.log(extension)