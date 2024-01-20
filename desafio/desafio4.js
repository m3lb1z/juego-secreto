
function mostrarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

function mostrarListaInvertida(lista) {
    for (let i = lista.length - 1; i >= 0; i--) {
        console.log(lista[i]);
    }
}


listaGenerica = [];

lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

listaGenerica.push("Java");
listaGenerica.push("Ruby");
listaGenerica.push("GoLang");

mostrarLista(lenguajesDeProgramacion);

mostrarListaInvertida(lenguajesDeProgramacion);

function calcularPromedioEnListas(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let listaDeNumeros = [5, 6, 7, 8, 9];
console.log(`El promedio de la lista ${listaDeNumeros} es ${calcularPromedioEnListas(listaDeNumeros)}`);

function encontrarMenorYMayorNumeros(lista) {
    let menor = lista[0];
    let mayor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
    }
    return [menor, mayor];
}

console.log(`El menor y mayor de la lista ${listaDeNumeros} es ${encontrarMenorYMayorNumeros(listaDeNumeros)}`);

function sumatoriaDeNumeros(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

console.log(`La sumatoria de la lista ${listaDeNumeros} es ${sumatoriaDeNumeros(listaDeNumeros)}`);

function buscarNumeroEnLista(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            return i;
        }
    }
    return -1;
}

console.log(`El numero 7 esta en la lista ${listaDeNumeros} en la posicion ${buscarNumeroEnLista(listaDeNumeros, 7)} del arreglo`);

function sumatoriaDeDosListas(lista1, lista2) {
    let listaSumatoria = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSumatoria.push(lista1[i] + lista2[i]);
    }
    return listaSumatoria;
}

console.log(`La sumatoria de las listas ${listaDeNumeros} y ${listaDeNumeros} es ${sumatoriaDeDosListas(listaDeNumeros, listaDeNumeros)}`);

function calcularPotenciaDosDeLista(lista) {
    let listaPotencia = [];
    for (let i = 0; i < lista.length; i++) {
        listaPotencia.push(lista[i] * lista[i]);
    }
    return listaPotencia;
}

console.log(`La potencia de la lista ${listaDeNumeros} es ${calcularPotenciaDosDeLista(listaDeNumeros)}`);
