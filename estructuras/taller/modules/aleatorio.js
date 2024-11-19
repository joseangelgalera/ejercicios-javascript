"use strict";

const coches = [
    { nombre: "Toyota", emoji: "🚗" },
    { nombre: "Honda", emoji: "🚙" },
    { nombre: "Ford", emoji: "🚕" },
    { nombre: "BMW", emoji: "🚓" },
    { nombre: "Audi", emoji: "🚘" }
];

function obtenerCocheAleatorio() {
    return coches[Math.floor(Math.random() * coches.length)];
}

export { obtenerCocheAleatorio };