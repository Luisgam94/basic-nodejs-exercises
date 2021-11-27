const data = {
    name: 'Luis',
    lastName: 'Gamarra',
    additionalInformation: { age: 27 }
};

const keys = Object.keys(data)
console.log(keys) // [ 'name', 'lastName', 'additionalInformation' ]

const isTrue = Object.prototype.hasOwnProperty.call(data, 'name')
console.log(isTrue) // true


const isFalse = Object.prototype.hasOwnProperty.call(data, 'birthday')
console.log(isFalse) // false


const data2 = [1, 2, 3, 4];
console.log(Object.keys(data2)) // indices [ '0', '1', '2', '3' ]

// Same as for (let k in data) console.log(k)
Object.keys(data2).forEach(k => {
    console.log(k) // 0, 1, 2, 3
    if(k === '3') {
        console.log(true)
    } else {
        console.log(false)
    }
});
