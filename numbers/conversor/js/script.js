"use strict";

const x = document.getElementById("x");
const y = document.getElementById("y");

const binario = document.getElementById("binario");
const octal = document.getElementById("octal");
const hexal = document.getElementById("hexal");
const decBinario = document.getElementById("decBinario");
const decOctal = document.getElementById("decOctal");
const decHexa = document.getElementById("decHexa");

const salida = document.getElementById("salida");
const cerrarSesion = document.querySelector('.cerrar-sesion');
const container = document.querySelector('.container');
const login = document.querySelector('.login-form');
const topnav = document.querySelector('.topnav');
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');

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