"use strict"

function logaritmo(x) {
    return Math.log10(parseFloat(x));
}

function logaritmoNatural(x) {
    return Math.log(parseFloat(x));
}

function potencia(base, exponente) {
    return Math.pow(parseFloat(base), parseFloat(exponente));
}

function exponencial(x) {
    return Math.exp(parseFloat(x));
}

function factorial(x) {
    if (x < 0) return "Error";
    if (x === 0 || x === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= x; i++) {
        resultado *= i;
    }
    return resultado;
}

function seno(x) {
    return Math.sin(parseFloat(x));
}

function coseno(x) {
    return Math.cos(parseFloat(x));
}

function tangente(x) {
    return Math.tan(parseFloat(x));
}

function modulo(x, y) {
    return parseFloat(x) % parseFloat(y);
}