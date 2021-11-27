const data = [4, 3, 2, 1];

for (let value of data) {
    console.log(value); // 4, 3, 2, 1
}
// Iterate over the values
Object.values(data).forEach(v => console.log(v));
// 4, 3, 2, 1

const attribute = [
    {
        name: 'Luis',
        lastName: 'Gamarra',
        age: '27'
    },
    {
        name: 'Oscar',
        lastName: 'Gamarra',
        age: '29'
    }
]

Object.values(attribute).forEach((item) => {
    if (item.name === 'Luis') {
        console.log(item.age) // 27
    } else {
        console.log(item.age) // 29
    }
});

console.log('-----------------')
let value;
for (let i = 0; i < attribute.length; i++) {
    if (attribute[i].name === 'Oscar') {
        value = attribute[i].age
        break;
    }
}

console.log(value) // 29
