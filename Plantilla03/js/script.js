document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.login-form form');
    var login = document.querySelector('.login-form');
    var container = document.querySelector('.container');
    var error = document.querySelector('.error');
    var cerrarsesion = document.querySelector('.cerrar-sesion');

    container.style.display = 'none';
    cerrarsesion.style.display = 'none';

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var usernameError = document.querySelector('.username-error');
        var welcome = document.querySelector('.welcome');
    
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
            document.cookie = "username=" + username;
            login.style.display = 'none';
            container.style.display = 'flex';
            cerrarsesion.style.display = 'block';   
            welcome.textContent = "Bienvenid@, " + username + "!";
            welcome.style.display = 'block';
        } else {
            alert("Usuario o contraseña incorrectos");
            document.getElementById('password').value = '';
        }
    });

    var usernameCookie = getCookie("username");
    if (usernameCookie) {
        login.style.display = 'none';
        container.style.display = 'flex';
        cerrarsesion.style.display = 'block';
    }

    function getCookie(name) {
        var cookieArr = document.cookie.split(";");

        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");

            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }

        return null;
    }

    cerrarsesion.addEventListener('click', function() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        container.style.display = 'none';
        login.style.display = 'flex';
        login.style.flexDirection = 'column';
        cerrarsesion.style.display = 'none';

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        var welcome = document.querySelector('.welcome');
        welcome.style.display = 'none';

        setTimeout(function() {
            login.style.display = 'flex';
        }, 0);
    });
});