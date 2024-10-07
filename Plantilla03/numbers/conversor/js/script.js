"use strict"

const x = document.getElementById("x");
const y = document.getElementById("y");

const binario = document.getElementById("binario");
const octal = document.getElementById("octal");
const hexal = document.getElementById("hexal");
const decBinario = document.getElementById("decBinario");
const decOctal = document.getElementById("decOctal");
const decHexa = document.getElementById("decHexa");

const salida = document.getElementById("salida");

binario.addEventListener('click', function() {
    salida.innerHTML = parseInt(x.value).toString(2);
});

octal.addEventListener('click', function() {
    salida.innerHTML =  parseInt(x.value).toString(8);

});

hexa.addEventListener('click', function() {
    salida.innerHTML = parseInt(x.value).toString(16);
});

decBinario.addEventListener('click', function(){
    salida.innerHTML = parseInt(y.value, 2);
});
    
decOctal.addEventListener('click', function() {
    salida.innerHTML = parseInt(y.value, 8);
});

decHexa.addEventListener('click', function(){
    salida.innerHTML = parseInt(y.value, 16);
});