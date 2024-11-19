"use strict";

class Pila {
    constructor(limite) {
        this.limite = limite;
        this.pila = [];
    }

    introduzco(prenda) {
        if (this.pila.length < this.limite) {
            this.pila.push(prenda);
            return `Prenda ${prenda.nombre} añadida a la cesta.`;
        } else {
            return "DEBERÍAS EMPEZAR A LAVAR LA ROPA";
        }
    }

    obtengo() {
        if (this.pila.length > 0) {
            const prenda = this.pila.pop();
            return `LA SIGUIENTE PRENDA A LAVAR ES ${prenda.nombre}`;
        } else {
            return "NO HAY MÁS ROPA QUE LAVAR";
        }
    }

    mostrarPila() {
        return this.pila;
    }
}

export { Pila };