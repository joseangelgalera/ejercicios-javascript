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

    function checkLogin() {
        var username = getCookie("username");
        if (username) {
            login.style.display = 'none';
            container.style.display = 'flex';
            topnav.style.display = 'block';
            welcome.textContent = "Bienvenid@, " + username + "!";
            welcome.style.display = 'block';
            header.style.borderRadius = '15px 15px 0 0';
        }
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
            setCookie("username", username, 1); 
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
        eraseCookie("username");
        container.style.display = 'none';
        login.style.display = 'flex';
        login.style.flexDirection = 'column';
        topnav.style.display = 'none';

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        welcome.style.display = 'none';
        header.style.borderRadius = ''; 

        setTimeout(function() {
            login.style.display = 'flex';
        }, 0);
    });

    checkLogin(); 
});
