"use strict";

function mostrarMensaje(mensaje) {
    const mensajeOutput = document.getElementById("mensajeOutput");
    mensajeOutput.textContent = mensaje;
}

export { mostrarMensaje };