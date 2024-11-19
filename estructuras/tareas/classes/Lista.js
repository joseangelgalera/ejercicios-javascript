"use strict";

class Lista {
    constructor(limite) {
        this.limite = limite;
        this.toDo = [];
        this.toDoPrior = [];
    }

    anado(tarea) {
        if (this.toDo.length < this.limite) {
            const posicion = Math.floor(Math.random() * (this.toDo.length + 1));
            this.toDo.splice(posicion, 0, tarea);
            return `Tarea "${tarea}" añadida a la lista de tareas.`;
        } else {
            return "DEBERÍAS EMPEZAR A HACER LAS TAREAS";
        }
    }

    elimino() {
        if (this.toDo.length > 0) {
            const posicion = Math.floor(Math.random() * this.toDo.length);
            const tarea = this.toDo.splice(posicion, 1);
            return `Tarea "${tarea}" eliminada de la lista de tareas.`;
        } else {
            return "NO HAY MÁS TAREAS QUE HACER";
        }
    }

    anadoPrior(tarea, prioridad) {
        if (this.toDoPrior.length < this.limite) {
            this.toDoPrior.push({ tarea, prioridad });
            this.toDoPrior.sort((a, b) => a.prioridad - b.prioridad); // Ordenar de menor a mayor
            return `Tarea "${tarea}" con prioridad ${prioridad} añadida a la lista de tareas con prioridad.`;
        } else {
            return "DEBERÍAS EMPEZAR A HACER LAS TAREAS";
        }
    }

    eliminoPrior() {
        if (this.toDoPrior.length > 0) {
            const tarea = this.toDoPrior.shift();
            return `Tarea "${tarea.tarea}" con prioridad ${tarea.prioridad} eliminada de la lista de tareas con prioridad.`;
        } else {
            return "NO HAY MÁS TAREAS QUE HACER";
        }
    }

    mostrarToDo() {
        return this.toDo;
    }

    mostrarToDoPrior() {
        return this.toDoPrior;
    }
}

export { Lista };