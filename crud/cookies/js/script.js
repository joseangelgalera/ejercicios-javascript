"use strict";

const cerrarSesion = document.querySelector('.cerrar-sesion');
const container = document.querySelector('.container');
const login = document.querySelector('.login-form');
const topnav = document.querySelector('.topnav');
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');
const cookieForm = document.getElementById("cookieForm");
const dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
const fetchOne = document.getElementById("fetchOne");
const fetchFive = document.getElementById("fetchFive");

var db;
var request = indexedDB.open("loginDB", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("loginStatus", { keyPath: "key" });
};

request.onsuccess = function(event) {
    db = event.target.result;
    loadCookies();
};

request.onerror = function(event) {
    console.error("Database error: " + event.target.errorCode);
};

cerrarSesion.addEventListener('click', function() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("LoggedIn");

    var transaction = db.transaction(["loginStatus"], "readwrite");
    var objectStore = transaction.objectStore("loginStatus");
    var request = objectStore.put({ key: "LoggedIn", value: false });

    request.onsuccess = function(event) {
        window.location.href = "/index.html";
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

cookieForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    setCookie(name, JSON.stringify({ value }), 1/1440); 
    addRowToTable(name, value);
    cookieForm.reset();
});

fetchOne.addEventListener("click", function() {
    fetchData(1);
});

fetchFive.addEventListener("click", function() {
    fetchData(5);
});