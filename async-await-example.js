const empleados = [
    {
        id: 1,
        nombre: 'Luis'
    },
    {
        id: 2,
        nombre: 'Gamarra'
    },
    {
        id: 3,
        nombre: 'Astocondor'
    }
];

const salarios = [
    {
        id: 1,
        salario: 500
    },
    {
        id: 2,
        salario: 1000
    },
    {
        id: 4,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {

    return promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id) ? empleados.find( e => e.id === id).nombre : null;
        (empleado) ?
            resolve(empleado) :
            reject(`Empleado con id ${id} no existe`);
    })

}
const getSalario = ( id ) => {

    return promesa = new Promise((resolve, reject) => {
        const salario = salarios.find( e => e.id === id) ? salarios.find( e => e.id === id).salario : null;
        (salario) ?
            resolve(salario) :
            reject(`Salario con id ${id} no existe`);
    })

}

const getInfoUsuario = async(id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }

}

const id = 10;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch( err => console.log(err));
