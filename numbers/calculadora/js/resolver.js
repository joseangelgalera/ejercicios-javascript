"use strict"

function cambiar(value) {
  if (value === 'cientifica') {
    for (let x = 0; x < botonesCi.length; x++) {
      botonesCi[x].style.visibility = "visible";
    }
    document.getElementById("pantalla").style.width = "328px";
    document.getElementById("pantalla").style.left = "0";
    document.getElementById("salida").style.left = "112px";
  } else {
    for (let x = 0; x < botonesCi.length; x++) {
      botonesCi[x].style.visibility = "hidden";
    }

    document.getElementById("pantalla").style.width = "216px";
    document.getElementById("pantalla").style.left = "56px";
    document.getElementById("salida").style.left = "0px";
  }
}

function seleccionarOper(value) {
  return value;
}

function operacion(x, op, y) {
  let solucion;
  switch (op) {
      case "+":
          solucion  = sumar(x, y);
          break;
      case "-":
          solucion  = restar(x, y);
          break;
      case "*":
          solucion  = multiplicar(x, y);
          break;
      case "/":
          solucion  = dividir(x, y);
          break;
      case "1/x":
          solucion  = inverso(x);
          break;
      case "√":
          solucion  = raiz(x);
          break;
      case "%":
          solucion  = porcentaje(x, y);
          break;
      case "log":
          solucion = logaritmo(x);
          break;
      case "ln":
          solucion = logaritmoNatural(x);
          break;
      case "2^a":
          solucion = potencia(2, x);
          break;
      case "a^b":
          solucion = potencia(x, y);
          break;
      case "e":
          solucion = exponencial(x);
          break;
      case "!":
          solucion = factorial(x);
          break;
      case "sen":
          solucion = seno(x);
          break;
      case "cos":
          solucion = coseno(x);
          break;
      case "tan":
          solucion = tangente(x);
          break;
      case "mod":
          solucion = modulo(x, y);
          break;
      default:
          solucion = "Error";
  }
  return formatearResultado(solucion);
}

function inverso(x) {
  if (parseFloat(x) === 0) {
    return "Error";
  }
  return 1 / parseFloat(x);
}

function raiz(x) {
  if (parseFloat(x) < 0) {
    return "Error";
  }
  return Math.sqrt(parseFloat(x));
}

function porcentaje(x, y) {
  return (parseFloat(x) * parseFloat(y)) / 100;
}

function formatearResultado(valor) {
  if (typeof valor === "number") {
    return parseFloat(valor.toPrecision(5)).toString();
  }
  return valor;
}