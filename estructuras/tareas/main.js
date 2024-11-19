"use strict";

import { Lista } from "./classes/Lista.js";
import { obtenerTareaAleatoria, obtenerPrioridadAleatoria } from "./modules/aleatorio.js";
import { mostrarMensaje } from "./modules/mensaje.js";

const cerrarSesion = document.querySelector('.cerrar-sesion');
const container = document.querySelector('.container');
const login = document.querySelector('.login-form');
const topnav = document.querySelector('.topnav');
const welcome = document.querySelector('.welcome');
const header = document.querySelector('.header');
const toDoOutput = document.getElementById("toDoOutput");
const toDoPriorOutput = document.getElementById("toDoPriorOutput");
const añadirTareaBtn = document.getElementById("añadirTarea");
const eliminarTareaBtn = document.getElementById("eliminarTarea");
const añadirTareaPriorBtn = document.getElementById("añadirTareaPrior");
const eliminarTareaPriorBtn = document.getElementById("eliminarTareaPrior");

const listaTareas = new Lista(10);

cerrarSesion.addEventListener('click', function() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("LoggedIn");
    window.location.href = "/index.html";
});

añadirTareaBtn.addEventListener("click", function() {
    const tarea = obtenerTareaAleatoria();
    const mensaje = listaTareas.anado(tarea);
    mostrarMensaje(mensaje);
    actualizarToDo();
});

eliminarTareaBtn.addEventListener("click", function() {
    const mensaje = listaTareas.elimino();
    mostrarMensaje(mensaje);
    actualizarToDo();
});

añadirTareaPriorBtn.addEventListener("click", function() {
    const tarea = obtenerTareaAleatoria();
    const prioridad = obtenerPrioridadAleatoria();
    const mensaje = listaTareas.anadoPrior(tarea, prioridad);
    mostrarMensaje(mensaje);
    actualizarToDoPrior();
});

eliminarTareaPriorBtn.addEventListener("click", function() {
    const mensaje = listaTareas.eliminoPrior();
    mostrarMensaje(mensaje);
    actualizarToDoPrior();
});

function actualizarToDo() {
    const toDo = listaTareas.mostrarToDo();
    toDoOutput.innerHTML = toDo.map(tarea => `<div class="tarea">${tarea}</div>`).join("");
}

function actualizarToDoPrior() {
    const toDoPrior = listaTareas.mostrarToDoPrior();
    toDoPriorOutput.innerHTML = toDoPrior.map(item => `<div class="tarea">${item.tarea} (Prioridad: ${item.prioridad})</div>`).join("");
}