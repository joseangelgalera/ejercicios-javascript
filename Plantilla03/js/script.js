"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.login-form form');
    var login = document.querySelector('.login-form');
    var container = document.querySelector('.container');
    var error = document.querySelector('.error');
    var cerrarSesion = document.querySelector('.cerrar-sesion');
    var topnav = document.querySelector('.topnav');
    var welcome = document.querySelector('.welcome');
    var header = document.querySelector('.header');

    var db;
    var request = indexedDB.open("loginDB", 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore = db.createObjectStore("loginStatus", { keyPath: "key" });
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        checkLogin();
    };

    request.onerror = function(event) {
        console.error("Database error: " + event.target.errorCode);
    };

    function saveLoginStatus(key, value) {
        var transaction = db.transaction(["loginStatus"], "readwrite");
        var objectStore = transaction.objectStore("loginStatus");
        var request = objectStore.put({ key: key, value: value });

        request.onsuccess = function(event) {
            console.log("Login status saved.");
        };

        request.onerror = function(event) {
            console.error("Unable to save login status: " + event.target.errorCode);
        };
    }

    function getLoginStatus(key, callback) {
        var transaction = db.transaction(["loginStatus"]);
        var objectStore = transaction.objectStore("loginStatus");
        var request = objectStore.get(key);

        request.onsuccess = function(event) {
            callback(event.target.result ? event.target.result.value : null);
        };

        request.onerror = function(event) {
            console.error("Unable to retrieve login status: " + event.target.errorCode);
        };
    }

    function checkLogin() {
        getLoginStatus("LoggedIn", function(isLoggedIn) {
            var username = sessionStorage.getItem("username");
            if (isLoggedIn === true && username) {
                login.style.display = 'none';
                container.style.display = 'flex';
                topnav.style.display = 'block';
                welcome.textContent = "Bienvenid@, " + username + "!";
                welcome.style.display = 'block';
                header.style.borderRadius = '15px 15px 0 0';
            }
        });
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var usernameError = document.querySelector('.username-error');
    
        var storedUsername = "Jose";
        var storedPassword = "1234";
    
        if (username.length <= 3) {
            usernameError.style.display = 'block';
            document.getElementById('password').disabled = true;
            return;
        } else {
            usernameError.style.display = 'none';
            document.getElementById('password').disabled = false;
        }
    
        if (username === storedUsername && password === storedPassword) {
            sessionStorage.setItem("username", username); 
            sessionStorage.setItem("LoggedIn", "true");
            saveLoginStatus("LoggedIn", true);
            login.style.display = 'none';
            container.style.display = 'flex';
            topnav.style.display = 'block';
            welcome.textContent = "Bienvenid@, " + username + "!";
            welcome.style.display = 'block';
            header.style.borderRadius = '15px 15px 0 0'; 
        } else {
            alert("Usuario o contraseña incorrectos");
            document.getElementById('password').value = '';
        }
    });

    cerrarSesion.addEventListener('click', function() {
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
    
            window.location.href = "/Plantilla03/index.html";
        };
    
        request.onerror = function(event) {
            console.error("Unable to update login status: " + event.target.errorCode);
        };
    });

    checkLogin(); 
});