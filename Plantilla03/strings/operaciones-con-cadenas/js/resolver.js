"use strict"

function operacionMayus(salida, mayuscula) {
    let resultado;
    switch (mayuscula) {
        case "A-Z":
            resultado = mayusculasTodas(salida);
            break;
        case "A_":
            resultado = mayusculasPrimeras(salida);
            break;
        case "_Z":
            resultado = mayusculasUltimas(salida);
            break;
        case "AEIOU":
            resultado = mayusculasVocales(salida);
            break;
        case "BCD":
            resultado = mayusculasConsonantes(salida);
            break;
    }
    
    return resultado;
}

function operacionMinus(salida, minuscula) {
    let resultado;
    switch (minuscula) {
        case "a-z":
            resultado = minusculasTodas(salida);
            break;
        case "a_":
            resultado = minusculasPrimeras(salida);
            break;
        case "_z":
            resultado = minusculasUltimas(salida);
            break;
        case "aeiou":
            resultado = minusculasVocales(salida);
            break;
        case "bcd":
            resultado = minusculasConsonantes(salida);
            break;
        
    }
    return resultado;
}