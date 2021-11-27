const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ' ' + real;
// crear string con backticks
const template = `Fernando Herrera`;
const template2 = `${ nombre } ${ real }`;

console.log(normal);
console.log(template);
console.log(template2 == normal);

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html)
