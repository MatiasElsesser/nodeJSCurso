const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('______________')

console.log(`Nombre del sistema operativo : ${os.platform()}`)
console.log(`Version del sistema operativo: ${os.release()}`)
console.log(`Arquitectura ${os.arch()}`)
console.log(`CPUs ${os.cpus().length}`)
console.log(`Memoria libre: ${os.freemem() / 1024 / 1024} mb`)
console.log(`Memoria total: ${os.totalmem() / 1024 / 1024} mb`)
console.log(`Uptime: ${os.uptime() / 60 / 60} minutos`)
