
function holaMundo() {
    console.log('Hola mundo');
}

holaMundo();

function saludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludo("Elvis");

function duplicarValor(numero) {
    return numero * 2;
}

console.log(`Duplicar 6 con funcion ${duplicarValor(6)}`);

const duplicarValorArrow = numero => numero * 2;
console.log(`Duplicar 12 con funcion arrow ${duplicarValorArrow(12)}`);

function promedioDeTresNumeros(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

console.log(`Promedio de tres numeros ${promedioDeTresNumeros(11, 17, 19)}`);

function obtenerNumeroMayor(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

console.log(`Numero mayor de 5 y 50 es ${obtenerNumeroMayor(5, 50)}`);

function potenciaDeDos(numero) {
    return numero * numero;
}


console.log(`Resultado de multiplicar 99 por su mismo numero es ${potenciaDeDos(99)}`);
