// se recomienda a partir de node 16, poner 'node:' antes que fs o cualquier otro modulo nativo
const fs = require('node:fs')
// fs viene de file system
const stats = fs.statSync('./archivo.txt')


console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamaño en bytes
  // TODO ESTO ES SINCRONO
)