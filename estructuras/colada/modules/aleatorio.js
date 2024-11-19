"use strict";

const prendas = [
    { nombre: "Camisa", emoji: "👕" },
    { nombre: "Pantalón", emoji: "👖" },
    { nombre: "Calcetín", emoji: "🧦" },
    { nombre: "Sombrero", emoji: "🎩" },
    { nombre: "Zapato", emoji: "👞" }
];

function obtenerPrendaAleatoria() {
    return prendas[Math.floor(Math.random() * prendas.length)];
}

export { obtenerPrendaAleatoria };