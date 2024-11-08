"use strict";

const cerrarSesion = document.querySelector('.cerrar-sesion');
const container = document.querySelector('.container');
const login = document.querySelector('.login-form');
const topnav = document.querySelector('.topnav');
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');
const indexedDBForm = document.getElementById("indexedDBForm");
const dataTable = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
const fetchOne = document.getElementById("fetchOne");
const fetchFive = document.getElementById("fetchFive");

var db;
var request = indexedDB.open("dataDB", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("data", { keyPath: "name" });
};

request.onsuccess = function(event) {
    db = event.target.result;
    loadIndexedDBData();
};

request.onerror = function(event) {
    console.error("Database error: " + event.target.errorCode);
};

cerrarSesion.addEventListener('click', function() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("LoggedIn");
    window.location.href = "/index.html";
});

indexedDBForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("indexedDBName").value;
    const age = document.getElementById("indexedDBAge").value;
    const email = document.getElementById("indexedDBEmail").value;
    setIndexedDB(name, age, email);
    addRowToTable(name, age, email);
    indexedDBForm.reset();
});

fetchOne.addEventListener("click", function() {
    fetchData(1);
});

fetchFive.addEventListener("click", function() {
    fetchData(5);
});