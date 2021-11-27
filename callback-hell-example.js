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

const getEmpleado = ( id, callback2 ) => {

    const empleado = empleados.find( e => e.id === id).nombre;

    if (empleado) {
        callback2( null, empleado);

    } else {
        callback2(`Empleado con id ${id} no existe`);
    }


}



const getSalario = ( id, callback2 ) => {

    const salario = salarios.find( s => s.id === id).salario;

    if (salario) {
        callback2( null, salario);

    } else {
        callback2(`Salario con id ${ id} no existe`);
    }


}

const id = 1;

getEmpleado(id, ( err, empleado ) => {

    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, ( err, salario ) => {

        if ( err ) {
            console.log('ERROR!');
            return console.log(err);
        }

        console.log('El empleado:', empleado, 'tiene un salario de: ', salario);
    });
});
