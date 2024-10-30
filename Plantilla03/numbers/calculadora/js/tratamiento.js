"use strict"

function escribir(value) {
    x += value;
    return x;
}

function guardarX(textContent) {
    x = textContent;
    return x;
}

function guardarY(textContent) {
    y = textContent;
    return y;
}

function eliminar(value) {
    return value.slice(0, -1);
}

function limpiarCampo() {
    x = "";
    y = "";
    operador = "";
    entradaActual = "";
}

function limpiarTodo() {
    limpiarCampo();
    salida.innerHTML = "";
}