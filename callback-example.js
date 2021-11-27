const resp = (name , callback) => {
    return callback(name)
}

resp('luis', (name) => {
    console.log(name)
})  // Luis

console.log('---------------')

const funcCallback = (name) => {
    console.log(name)
}

resp('Gamarra',funcCallback) // Gamarra


// callback -< funcion que se manda como argumento a otra funcion

setTimeout( function() {
    console.log('Hola Mundo');
}, 1000);

const getUsuarioById = ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }
    setTimeout( () => {
        callback(usuario)
    }, 1500)
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
})
