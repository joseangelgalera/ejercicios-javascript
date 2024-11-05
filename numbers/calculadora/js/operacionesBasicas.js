"use strict"

function sumar(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function restar(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function multiplicar(x, y) {
    return parseFloat(x) * parseFloat(y);
}

function dividir(x, y) {
    if (parseFloat(y) === 0) {
        return "Error";
    }
    return parseFloat(x) / parseFloat(y);
}