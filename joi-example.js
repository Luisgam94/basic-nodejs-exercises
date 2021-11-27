const Joi = require('joi');

const data = {
    name: 'Luis',
    lastName: 'Gamarra',
    age: "15",
}

const schema = Joi.object({
    name: Joi.string().min(3).max(10)
        .required(),
    lastName: Joi.string().required(),
    age: Joi.number(),
});

const { error, value } = schema.validate(data);

console.log(value) // cumple { name: 'Luis', lastName: 'Gamarra', age: 15 }
console.log(error) // undefined
