// En Node.js, el objeto process es un objeto global que proporciona información y control sobre el proceso en ejecución. Contiene propiedades y métodos que permiten interactuar con el entorno de ejecución y gestionar el flujo de ejecución de la aplicación

// process.argv: Este es un array que contiene los argumentos de la línea de comandos con la que se ejecutó el proceso Node.js. El primer elemento es el ejecutable de Node.js, el segundo es el nombre del script que se está ejecutando, y los elementos subsiguientes son los argumentos proporcionados.
console.log(process.argv);

// process.env: Contiene las variables de entorno del sistema
console.log(process.env.NODE_ENV);




// process.on(event, callback): Permite registrar manejadores de eventos para ciertos eventos del proceso, como 'exit', 'uncaughtException', etc.
process.on('exit', (code) => {
  console.log(`El proceso está saliendo con el código: ${code}`);
});


// podemos controlar los eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
  console.log('Proceso terminador')
})

//muestra la ruta en la cual se esta ejecutando el proceso
console.log(process.cwd())

// process.exit([code]): Termina el proceso actual con un código de salida opcional. Por convención, un código de salida de 0 indica éxito, mientras que otros valores indican algún tipo de error.
process.exit(1); // Termina el proceso con un código de salida 1 (indicando un error)