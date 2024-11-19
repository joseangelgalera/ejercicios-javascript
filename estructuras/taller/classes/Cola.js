"use strict";

class Cola {
    constructor(limite) {
        this.limite = limite;
        this.cola = [];
    }

    llega(coche) {
        if (this.cola.length < this.limite) {
            this.cola.push(coche);
            return `Coche ${coche.nombre} añadido a la lista de espera.`;
        } else {
            return "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
        }
    }

    atiendo() {
        if (this.cola.length > 0) {
            const coche = this.cola.shift();
            return `EL SIGUIENTE COCHE A REPARAR ES ${coche.nombre}`;
        } else {
            return "NO HAY MÁS COCHES QUE REPARAR";
        }
    }

    mostrarCola() {
        return this.cola;
    }
}

export { Cola };