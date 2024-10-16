"use strict"

function mayusculasTodas(salida) {
  return salida.toUpperCase();
}

function mayusculasPrimeras(salida) {
  let primera = /\b[a-z]/g;

  return salida.replace(primera, (match) => match.toUpperCase());
}

function mayusculasUltimas(salida) {
  let ultima = /[a-z]\b/g;

  return salida.replace(ultima, (match) => match.toUpperCase());
}

function minusculasPrimeras(salida) {
  let primera = /\b[A-Z]/g;

  return salida.replace(primera, (match) => match.toLowerCase());
}

function minusculasUltimas(salida) {
  let ultima = /[A-Z]\b/g;

  return salida.replace(ultima, (match) => match.toLowerCase());
}

function mayusculasVocales(salida) {
  let todas = /[aeiou]/g;

  return salida.replace(todas, (match) => match.toUpperCase());
}

function minusculasVocales(salida) {
  let todas = /[AEIOU]/g;

  return salida.replace(todas, (match) => match.toLowerCase());
}

function mayusculasConsonantes(salida) {
  let todas = /[^aeiou\s]/g;

  return salida.replace(todas, (match) => match.toUpperCase());
}

function minusculasConsonantes(salida) {
  let todas = /[^AEIOU\s]/g;

  return salida.replace(todas, (match) => match.toLowerCase());
}

function minusculasTodas(salida) {
  return salida.toLowerCase();
}

async function solicitar() {
  salida.value = "";
  let json = await cargar('https://api.chucknorris.io/jokes/random');
  salida.value = json.value;
}

async function cargar(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

function aleatorio(salida) {
  let caracteres = [];

  for (let letra of salida) {
    let random = Math.random();

    if (random < 0.5) {
      caracteres.push(letra.toUpperCase());
    } else {
      caracteres.push(letra.toLowerCase());
    }
  }

  return caracteres.join("");
};

function aleatorioAnimado(salida) {

  if (animacion) {
    clearInterval(animacion);
  }
  animacion = setInterval(() => {
    let intervalo = aleatorio(salida);
    document.getElementById("salida").value = intervalo;
  }, tiempo);
  return salida;

}

function parar() {
  clearInterval(animacion);
}

function rapido() {

  tiempo -= 100;
  aleatorioAnimado(salida.value);
}


function lento() {
  tiempo += 100;
  aleatorioAnimado(salida.value);
};