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
    const cerrarSesion = document.querySelector('.cerrar-sesion');
    const container = document.querySelector('.container');
    const login = document.querySelector('.login-form');
    const topnav = document.querySelector('.topnav');
    const welcome = document.querySelector('.welcome');
    const header = document.querySelector('.header');

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
        grabarSalida();
    }); 

    restar.addEventListener('click', function() {
        salida.value = parseFloat(x) - parseFloat(y);
        grabarSalida();
    });

    multiplicar.addEventListener('click', function() {
        salida.value = parseFloat(x) * parseFloat(y);
        grabarSalida();
    });

    dividir.addEventListener('click', function() {
        salida.value = parseFloat(x) / parseFloat(y);
        grabarSalida();
    });

    parteEntera.addEventListener('click', function() {
        x = parseInt(salida.value);
        document.getElementById("x").value = x;
    });

    parteDecimal.addEventListener('click', function() {
        y = salida.value - Math.floor(salida.value);
        document.getElementById("y").value = y;
    });

    factorial.addEventListener('click', function() {
        let fact = 1;
        for (let i = 1; i <= x; i++) {
            fact = fact * i;
        }
        salida.value = fact;
        grabarSalida();
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