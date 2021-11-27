const os = require('os');

// libreria para obtener los valores del sistema
console.log(os.platform())
console.log(os.arch())
console.log(os.cpus().length)

console.log(os.freemem())

const SIZE = 1024;
const kb = (bytes) => bytes/SIZE
const mb = (bytes) => kb(bytes)/SIZE
const gb = (bytes) => mb(bytes)/SIZE

console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log('gigabytes ',gb(os.freemem()))

console.log(gb(os.totalmem()))

console.log(os.hostname())
console.log(os.networkInterfaces())


