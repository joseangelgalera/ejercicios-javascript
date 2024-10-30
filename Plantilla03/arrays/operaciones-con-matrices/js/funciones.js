"use strict";

function generarMatriz(dimension) {
    const matriz = [];
    for (let i = 0; i < dimension; i++) {
        const fila = [];
        for (let j = 0; j < dimension; j++) {
            fila.push(Math.floor(Math.random() * 10));
        }
        matriz.push(fila);
    }
    return matriz;
}

function mostrarMatriz(container, matriz) {
    container.innerHTML = '';
    matriz.forEach(fila => {
        const filaDiv = document.createElement('div');
        filaDiv.classList.add('fila');
        fila.forEach(valor => {
            const celda = document.createElement('span');
            celda.classList.add('celda');
            celda.textContent = valor;
            filaDiv.appendChild(celda);
        });
        container.appendChild(filaDiv);
    });
}

function sumarMatrices(matrizA, matrizB) {
    const dimension = matrizA.length;
    const resultado = [];
    for (let i = 0; i < dimension; i++) {
        const fila = [];
        for (let j = 0; j < dimension; j++) {
            fila.push(matrizA[i][j] + matrizB[i][j]);
        }
        resultado.push(fila);
    }
    return resultado;
}

function restarMatrices(matrizA, matrizB) {
    const dimension = matrizA.length;
    const resultado = [];
    for (let i = 0; i < dimension; i++) {
        const fila = [];
        for (let j = 0; j < dimension; j++) {
            fila.push(matrizA[i][j] - matrizB[i][j]);
        }
        resultado.push(fila);
    }
    return resultado;
}

function multiplicarMatrices(matrizA, matrizB) {
    const dimension = matrizA.length;
    const resultado = [];
    for (let i = 0; i < dimension; i++) {
        const fila = [];
        for (let j = 0; j < dimension; j++) {
            let suma = 0;
            for (let k = 0; k < dimension; k++) {
                suma += matrizA[i][k] * matrizB[k][j];
            }
            fila.push(suma);
        }
        resultado.push(fila);
    }
    return resultado;
}

