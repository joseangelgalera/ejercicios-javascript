"use strict";

let salida = document.getElementById("salida");
let animacion;
let tiempo = 1000;

const mayusculas = document.querySelectorAll(".mayuscula");
const minusculas = document.querySelectorAll(".minuscula");
const animaciones = document.querySelectorAll(".animacion");
const cerrarSesion = document.querySelector('.cerrar-sesion');
const container = document.querySelector('.container');
const login = document.querySelector('.login-form');
const topnav = document.querySelector('.topnav');
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');

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

var db;
var request = indexedDB.open("loginDB", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("loginStatus", { keyPath: "key" });
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onerror = function(event) {
    console.error("Database error: " + event.target.errorCode);
};

cerrarSesion.addEventListener('click', function() {
    window.location.href = "/index.html";
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("LoggedIn");

    var transaction = db.transaction(["loginStatus"], "readwrite");
    var objectStore = transaction.objectStore("loginStatus");
    var request = objectStore.put({ key: "LoggedIn", value: false });

    request.onsuccess = function(event) {
        console.log("Login status updated to false.");
        
        container.style.display = 'none';
        login.style.display = 'flex';
        login.style.flexDirection = 'column';
        topnav.style.display = 'none';

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        welcome.style.display = 'none';
        header.style.borderRadius = ''; 

        
    };

    request.onerror = function(event) {
        console.error("Unable to update login status: " + event.target.errorCode);
    };
});