function sumar(a,b = 10) {
    return a+b;
}
console.log(sumar(5))
console.log(sumar(5,11))

const sumar2 = (a, b = 10) => a+b;

console.log( sumar2(2))

const saludar = () => 'Hola Mundo';

console.log(saludar());
