const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //edad:50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder } `
    }
}

console.log( deadpool.getNombre());

//const nombre = deadpol.nombre;
//const apellido = deadpol.apellido;
//const poder = deadpol.poder;

const { nombre,apellido,poder,edad = 0 } = deadpool;
console.log(nombre,apellido,poder,edad);

function imprimeHeroe( heroe) {
    const { nombre,apellido,poder,edad = 0 } = heroe;

    console.log(nombre,apellido,poder,edad);
}

function imprimeHeroe2( { nombre,apellido,poder,edad = 0 }) {

    console.log(nombre,apellido,poder,edad);
}

imprimeHeroe( deadpool );
imprimeHeroe2( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [ , h2, h3] = heroes;
console.log(h2,h3)
