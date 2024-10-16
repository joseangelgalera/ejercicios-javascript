"use strict"

let salida = document.getElementById("salida");
let animacion;
let tiempo = 1000;



const mayusculas = document.querySelectorAll(".mayuscula");
const minusculas = document.querySelectorAll(".minuscula");
const animaciones = document.querySelectorAll(".animacion");
document.getElementById("aleatorio").addEventListener("click", function (){
    aleatorioAnimado(salida.value);
});
document.getElementById("parar").addEventListener("click", function (){
    parar();
});
document.getElementById("rapido").addEventListener("click", function (){
    rapido();
}); 
document.getElementById("lento").addEventListener("click", function (){
    lento();
}); 
document.getElementById("api").addEventListener("click", async function (){
    solicitar();
}) ;

let resultado = "";

for (let mayuscula of mayusculas) {

    mayuscula.addEventListener("click", function () {
        resultado = operacionMayus(salida.value, mayuscula.value);
        salida.value = resultado;
    });

}

for (let minuscula of minusculas) {
    minuscula.addEventListener("click", function () {
        resultado = operacionMinus(salida.value, minuscula.value);
        salida.value = resultado;
    });

}




