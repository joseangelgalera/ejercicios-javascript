"use strict"

let salida = document.getElementById("salida");
const opciones = document.getElementById("selector");
const numeros = document.querySelectorAll(".numeros");
const operadores = document.querySelectorAll(".operadores");
const operadoresCi = document.querySelectorAll(".operadoresCi");
const botonesCi = document.getElementsByClassName("operadoresCi");
const resolver = document.getElementById("resolver");
const borrar = document.getElementById("borrar");
const limpiarC = document.getElementById("limpiarC");
const limpiarT = document.getElementById("limpiarT");
const memoria = document.getElementById("memoria");

let x = "";
let y = "";
let operador = "";
let solucion = "";
let entradaActual = "";
let operandoActual = "x"; 
let memoriaValor = ""; 

opciones.addEventListener("change", function () {
    cambiar(opciones.value);
});

for (let numero of numeros) {
    numero.addEventListener("click", function () {
        entradaActual += numero.value;
        salida.innerHTML = entradaActual;
    });
}

for (let oper of operadores) {
    oper.addEventListener("click", function () {
        if (operandoActual === "x") {
            x = entradaActual;
            operandoActual = "y";
        } else {
            y = entradaActual;
        }
        entradaActual = "";
        operador = seleccionarOper(oper.value);
        salida.innerHTML = operador; 
    });
}

for (let operCi of operadoresCi) {
    operCi.addEventListener("click", function () {
        x = entradaActual;
        entradaActual = "";
        operador = seleccionarOper(operCi.value);
        salida.innerHTML = operador; 
    });
}

resolver.addEventListener("click", function () {
    y = entradaActual;
    entradaActual = "";
    salida.innerHTML = operacion(x, operador, y);
    operandoActual = "x"; 
});

borrar.addEventListener("click", function () {
    if (entradaActual !== "") {
        entradaActual = eliminar(entradaActual);
    } else if (y !== "") {
        y = eliminar(y);
    } else if (x !== "") {
        x = eliminar(x);
    }
    salida.innerHTML = salida.innerHTML.slice(0, -1);
});

limpiarC.addEventListener("click", function () {
    limpiarCampo();
    salida.innerHTML = "";
});

limpiarT.addEventListener("click", function () {
    limpiarTodo();
    salida.innerHTML = "";
    memoriaValor = ""; 
});

memoria.addEventListener("click", function () {
    if (salida.innerHTML !== "") {
        memoriaValor = salida.innerHTML; 
    }
    if (memoriaValor !== "") {
        salida.innerHTML = memoriaValor; 
        entradaActual = memoriaValor; 
    }
});