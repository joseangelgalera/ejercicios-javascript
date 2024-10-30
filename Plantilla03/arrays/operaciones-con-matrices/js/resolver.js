// resolver.js
"use strict";

let matrizA = [];
let matrizB = [];

function generarMatrices(dimension) {
    matrizA = generarMatriz(dimension);
    matrizB = generarMatriz(dimension);
    mostrarMatriz(document.querySelector('.matrizA'), matrizA);
    mostrarMatriz(document.querySelector('.matrizB'), matrizB);
}

function resolverOperacion(operacion) {
    let resultado;
    switch (operacion) {
        case 'sumar':
            resultado = sumarMatrices(matrizA, matrizB);
            break;
        case 'restar':
            resultado = restarMatrices(matrizA, matrizB);
            break;
        case 'multiplicar':
            resultado = multiplicarMatrices(matrizA, matrizB);
            break;
        default:
            return;
    }
    mostrarMatriz(document.querySelector('.resultado'), resultado);
}

