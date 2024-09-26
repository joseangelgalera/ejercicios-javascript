"use strict"

window.onload = function() {
    login();
};

function login() {
    var container = document.querySelector('.container');

    var nombre = prompt("Por favor, ingresa tu nombre:");
    
    while (nombre !== "Jose") {
        alert("Nombre no ingresado. Por favor, intenta nuevamente.");
        nombre = prompt("Por favor, ingresa tu nombre:");
    }
    
    var contraseña = prompt("Hola " + nombre + "! Por favor, ingresa tu contraseña:");
        
    while (contraseña !== "1234") {
        alert("Contraseña incorrecta. Por favor, intenta nuevamente.");
        nombre = prompt("Por favor, ingresa tu nombre:");
        contraseña = prompt("Hola " + nombre + "! Por favor, ingresa tu contraseña:");
    }
    
    alert("¡Bienvenido, " + nombre + "! Has iniciado sesión exitosamente.");
    container.style.display = 'flex';
}
