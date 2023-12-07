const fs = require('node:fs/promises')

// en los callback el error siempre esta primero en los parametros
fs.readdir('.')
  .then(files =>   files.forEach(file => console.log(file)))
  .catch((err) => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
      return;
    }}
  )