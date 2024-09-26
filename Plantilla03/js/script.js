"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.login-form form');
    var login = document.querySelector('.login-form');
    var container = document.querySelector('.container');

    container.style.display = 'none';

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === "Jose" && password === "1234") {
            alert("¡Bienvenido, " + username + "!");
            login.style.display = 'none';
            container.style.display = 'flex';
        } else {
            alert("Nombre de usuario o contraseña incorrectos");
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });
});











// "use strict"


// function login() {
//     var container = document.querySelector('.container');

//     var nombre = prompt("Por favor, ingresa tu nombre de usuario:");
    
//     while (nombre !== "Jose") {
//         alert("Nombre de usuario o contraseña incorrectos");
//         nombre = prompt("Por favor, ingresa tu nombre:");
//     }
    
//     var contraseña = prompt("Hola " + nombre + "! Por favor, ingresa tu contraseña:");
        
//     while (contraseña !== "1234") {
//         alert("¿Desea intentarlo de nuevo?");
//         nombre = prompt("Por favor, ingresa tu nombre de usuario:");
//         contraseña = prompt("Hola " + nombre + "! ingrese su contraseña:");
//     }
    
//     alert("¡Bienvenido, " + nombre + "!");
//     container.style.display = 'flex';
// }
