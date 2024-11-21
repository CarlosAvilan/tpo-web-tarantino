'use strict';

import { libros } from "../datos/libros.js";

function renderizarLibros() {
    const librosContainer = document.getElementById("libros-container");

    librosContainer.innerHTML = '';

    libros.forEach(libro => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("libros-card");  

        const imagen = document.createElement("img");
        imagen.src = libro.imagen;
        imagen.alt = libro.alt;
        imagen.classList.add("poster-libros"); 

        const info = document.createElement("div");
        info.classList.add("libro-info");  

        const titulo = document.createElement("h3");
        titulo.textContent = libro.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = libro.descripcion;

        info.appendChild(titulo);
        info.appendChild(descripcion);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(info);

        librosContainer.appendChild(tarjeta);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarLibros();
});
