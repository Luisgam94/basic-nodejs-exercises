console.log(parseInt('1000000010,11',10)) // 1000000010
console.log(parseInt(10)) // 10


let x = 5;

(function () {
    //var x; // Se elevo la declaración
    console.log("x:", x); // 5
    x = 10;
    console.log("x:", x); // 10
}());
