const ctx = {
    request: {
        body: {
            name: 'Luis',
            lastName: 'Gamarra',
        }
    }
}

// misma referencia del objeto ctx
let access = ctx;

access.request.age = '27';
access.request.hobby = 'futbol';

console.log(ctx)
console.log(access)
// Mismo resultado, mismo objeto de referencia
/*
{
  request: {
    body: { name: 'Luis', lastName: 'Gamarra' },
    age: '27',
    hobby: 'futbol'
  }
}

 */

console.log('----')
console.log(access['request']);
/*
{
  body: { name: 'Luis', lastName: 'Gamarra' },
  age: '27',
  hobby: 'futbol'
}

 */
access['newField'] = 'skill'
console.log(access)
/*
{
  request: {
    body: { name: 'Luis', lastName: 'Gamarra' },
    age: '27',
    hobby: 'futbol'
  },
  newField: 'skill'
}

 */

const data = [
    {
        name: 'luis'
    },
    {
        name: 'oscar'
    }
]

const [value] = data; // desestructuracion, obteniendo primer valor
console.log(value.name) // luis


const data3 = {};

data3['alias'] = 'suscriber';

console.log(data3) // { alias: 'suscriber' }


const condition = (a) => {
    if (a===5) {
        console.log('a igual que 5')
    } else {
        console.log('else')
        if (a===6) {
            console.log('a igual que 6')
        }
    }
}
condition(6) // a igual que 6
