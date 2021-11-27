const people = [
    { id: "1", name: "Leigh", age: 35 },
    { id: "2", name: "Jenny", age: 30 },
    { id: "3", name: "Heather", age: 28 },
];

const result = people.reduce((acc, person) => {
    console.log(acc) // 0 , 35, 65, 93
    console.log(person) // { id: "1", name: "Leigh", age: 35 }  { id: "2", name: "Jenny", age: 30 }  { id: "3", name: "Heather", age: 28 }
    return acc + person.age
}, 0);

console.log(result) // 93


result2 = people.reduce((acc, person) =>
{
    console.log(acc) // [], [ 'Leigh' ], [ 'Leigh', 'Jenny' ], [ 'Leigh', 'Jenny', 'Heather' ]
    console.log(person) // { id: "1", name: "Leigh", age: 35 }  { id: "2", name: "Jenny", age: 30 }  { id: "3", name: "Heather", age: 28 }
    return [...acc, person.name]
}, []);
console.log(result2) // [ 'Leigh', 'Jenny', 'Heather' ]


result3 = people.reduce((acc, person) => {
    return { ...acc, [person.id]: person };
}, {});

console.log(result3)
/*
{
  '1': { id: '1', name: 'Leigh', age: 35 },
  '2': { id: '2', name: 'Jenny', age: 30 },
  '3': { id: '3', name: 'Heather', age: 28 }
}

 */


result4 = people.reduce((acc, person) => {
    if (acc !== null) return acc;
    if (person.name === "Leigh") return person;
    return null;
}, null);

console.log('################')
console.log(result4) // { id: '1', name: 'Leigh', age: 35 }

