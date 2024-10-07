"use strict"

document.addEventListener('DOMContentLoaded', function() {
let x = document.getElementById("x");
let y = document.getElementById("y");


const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const parteEntera = document.getElementById("parteEntera");
const parteDecimal = document.getElementById("parteDecimal");
const factorial = document.getElementById("factorial");
var cerrarSesion = document.querySelector('.cerrar-sesion');


let salida = document.getElementById("salida"); 

function grabar() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
};

function grabarSalida() {
    salida = document.getElementById("salida").value;
}

x.addEventListener('keyup', grabar);
y.addEventListener('keyup', grabar);
salida.addEventListener('change', grabar)

sumar.addEventListener('click', function() {

    salida.value = parseFloat(x) + parseFloat(y);

    grabarSalida;

}); 

restar.addEventListener('click', function() {

    salida.value = parseFloat(x) - parseFloat(y);

    grabarSalida;

});

multiplicar.addEventListener('click', function() {

    salida.value = parseFloat(x) * parseFloat(y);

    grabarSalida;

});

dividir.addEventListener('click', function() {

    salida.value = parseFloat(x) / parseFloat(y);
    
    grabarSalida;

});

parteEntera.addEventListener('click', function() {
    x = parseInt(salida.value);
    document.getElementById("x").value = x;
});

parteDecimal.addEventListener(`click`, function() {
    y = salida.value - Math.floor(salida.value);
    document.getElementById("y").value = y;
});

factorial.addEventListener('click', function() {
    let fact = 1;
    for (let i = 1; i <= x; i++) {
        fact = fact * i;
    }
    salida.value = fact;
    grabarSalida;
});

});