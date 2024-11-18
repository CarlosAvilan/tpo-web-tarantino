'use strict';

import { peliculas } from "../datos/peliculas.js";

let indiceActual = 0;
let peliculasPorPagina = 3;
const izquierdaBtn = document.getElementById("izquierda");
const derechaBtn = document.getElementById("derecha");

function ajustarPeliculasPorPagina() {
  const anchoPantalla = window.innerWidth;
  indiceActual = 0
  if (anchoPantalla >= 1150) {
    peliculasPorPagina = 3;
  } else if (anchoPantalla >= 800) {
    peliculasPorPagina = 2;
  } else {
    peliculasPorPagina = 1;
  }

  renderizarPeliculas();
}

function renderizarPeliculas() {
    const peliculasExistentes = document.querySelectorAll('.pelicula-card');
    peliculasExistentes.forEach(pelicula => pelicula.remove());

    const peliculasParaMostrar = peliculas.slice(indiceActual, indiceActual + peliculasPorPagina);

    peliculasParaMostrar.forEach(pelicula => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("pelicula-card");

        const imagen = document.createElement("img");
        imagen.src = pelicula.imagen;
        imagen.alt = pelicula.alt;
        imagen.classList.add("poster-peliculas");

        const info = document.createElement("div");
        info.classList.add("pelicula-info");

        const titulo = document.createElement("h3");
        titulo.textContent = pelicula.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = pelicula.descripcion;

        info.appendChild(titulo);
        info.appendChild(descripcion);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(info);

        izquierdaBtn.insertAdjacentElement("afterend", tarjeta);
    });
}

function moverIzquierda() {
    if (indiceActual > 0) {
        indiceActual -= peliculasPorPagina;
        renderizarPeliculas();
    }
}

function moverDerecha() {
    if (indiceActual + peliculasPorPagina < peliculas.length) {
        indiceActual += peliculasPorPagina;
        renderizarPeliculas();
    }
}

izquierdaBtn.addEventListener("click", moverIzquierda);
derechaBtn.addEventListener("click", moverDerecha);

window.addEventListener('resize', ajustarPeliculasPorPagina);

document.addEventListener("DOMContentLoaded", () => {
    ajustarPeliculasPorPagina();
});
