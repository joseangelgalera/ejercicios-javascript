"use strict";

import { Cola } from "./classes/Cola.js";
import { obtenerCocheAleatorio } from "./modules/aleatorio.js";
import { mostrarMensaje } from "./modules/mensaje.js";

const cerrarSesion = document.querySelector('.cerrar-sesion');
const container = document.querySelector('.container');
const login = document.querySelector('.login-form');
const topnav = document.querySelector('.topnav');
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');
const colaOutput = document.getElementById("colaOutput");
const atenderCocheBtn = document.getElementById("atenderCoche");
const añadirCocheBtn = document.getElementById("añadirCoche");

const taller = new Cola(10);

cerrarSesion.addEventListener('click', function() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("LoggedIn");
    window.location.href = "/index.html";
});

añadirCocheBtn.addEventListener("click", function() {
    const coche = obtenerCocheAleatorio();
    const mensaje = taller.llega(coche);
    mostrarMensaje(mensaje);
    actualizarCola();
});

atenderCocheBtn.addEventListener("click", function() {
    const mensaje = taller.atiendo();
    mostrarMensaje(mensaje);
    actualizarCola();
});

function actualizarCola() {
    const cola = taller.mostrarCola();
    colaOutput.innerHTML = cola.map(coche => `<div class="coche">${coche.emoji} ${coche.nombre}</div>`).join("");
}