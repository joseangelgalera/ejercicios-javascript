"use strict";

const tareas = [
    "Lavar los platos",
    "Hacer la cama",
    "Limpiar el baño",
    "Sacar la basura",
    "Cocinar la cena",
    "Hacer ejercicio",
    "Leer un libro",
    "Estudiar programación",
    "Regar las plantas",
    "Lavar la ropa"
];

function obtenerTareaAleatoria() {
    return tareas[Math.floor(Math.random() * tareas.length)];
}

function obtenerPrioridadAleatoria() {
    return Math.floor(Math.random() * 10);
}

export { obtenerTareaAleatoria, obtenerPrioridadAleatoria };