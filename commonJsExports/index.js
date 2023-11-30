const { sum } = require('./sum') // <--- commonJS

console.log(sum(5,4))
console.log('Hola mundo!')

console.log(globalThis)
// variable global de toda nuestra aplicacion
// en el navegador se refiere al windows en Node se refuere a la variable 'global'
globalThis.console.log('Todo sale de globalThis')