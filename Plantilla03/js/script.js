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

        if (username === "Jose" && password === "1234") {
            document.cookie = "username=" + username;
            login.style.display = 'none';
            container.style.display = 'flex';
            cerrarsesion.style.display = 'block';
        } else {
            error.style.display = 'block';
            document.getElementById('username').value = '';
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
    
        error.style.display = 'none';
    
        setTimeout(function() {
            login.style.display = 'flex';
        }, 0);
    });
});