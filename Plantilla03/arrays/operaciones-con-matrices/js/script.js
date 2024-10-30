"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const inputDimension = document.querySelector('.entrada');
    const btnGenerar = document.querySelector('.generar');
    const btnSumar = document.querySelector('.sumar');
    const btnRestar = document.querySelector('.restar');
    const btnMultiplicar = document.querySelector('.multiplicar');
    const matrizAContainer = document.querySelector('.matrizA');
    const matrizBContainer = document.querySelector('.matrizB');
    const resultadoContainer = document.querySelector('.resultado');
    const cerrarSesion = document.querySelector('.cerrar-sesion');
    const container = document.querySelector('.container');
    const login = document.querySelector('.login-form');
    const topnav = document.querySelector('.topnav');
    const welcome = document.querySelector('.welcome');
    const header = document.querySelector('.header');
    const errorMessage = document.querySelector('.error-message');

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

    btnGenerar.addEventListener('click', function() {
        const dimension = parseInt(inputDimension.value);
        if (isNaN(dimension) || dimension <= 0) {
            errorMessage.textContent = "Por favor, introduce una dimensión válida.";
            errorMessage.style.display = 'block';
            return;
        }
        errorMessage.style.display = 'none';
        generarMatrices(dimension);
    });

    btnSumar.addEventListener('click', function() {
        resolverOperacion('sumar');
    });

    btnRestar.addEventListener('click', function() {
        resolverOperacion('restar');
    });

    btnMultiplicar.addEventListener('click', function() {
        resolverOperacion('multiplicar');
    });

    cerrarSesion.addEventListener('click', function() {
        window.location.href = "/Plantilla03/index.html";
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
});