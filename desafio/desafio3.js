
function calcularIndiceMasaCorporal(peso, estatura) {
    return peso / (estatura * estatura);
}

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

function convertirDivisaDolarASoles(dolares) {
    return dolares * 3.65;
}

function calcularAreaYPerimetroDeectangulo(ancho, alto) {
    let area = ancho * alto;
    let perimetro = 2 * (ancho + alto);
    console.log(`El area es ${area} y el perimetro es ${perimetro}`);
}

function calcularAreaYPerimetroDeCirculo(radio) {
    let area = Math.PI * radio * radio;
    let perimetro = 2 * Math.PI * radio;
    console.log(`El area es ${area} y el perimetro es ${perimetro}`);
}

function mostrarTablaDeMultiplicarPorNumero(numero) {
    let resultado = 0;
    console.log(`Tabla del ${numero}`);
    for (let i = 1; i <= 12; i++) {
        resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

console.log(`El IMC de 69kg y 1.70 metro es ${calcularIndiceMasaCorporal(80, 1.8)}`);	
console.log(`El factorial de 9 es ${calcularFactorial(9)}`);
console.log(`El 100 dolares a soles es ${convertirDivisaDolarASoles(100)}`);
calcularAreaYPerimetroDeectangulo(10.5, 30);
calcularAreaYPerimetroDeCirculo(3);
mostrarTablaDeMultiplicarPorNumero(21);
