'use strict';

const titulos = document.querySelectorAll(".botonLista");

for (let titulo of titulos) {
    titulo.addEventListener("click", () => {
        const listas = document.querySelectorAll(".listas ul");

        for (let ul of listas) {
            if (ul !== titulo.nextElementSibling) {
                ul.style.display = "none";
            }
        }

        let lista = titulo.nextElementSibling;
        
        if (lista && lista.tagName === "UL") {
            lista.style.display = lista.style.display === "block" ? "none" : "block";
            titulo.classList.toggle("active");
        } 
    });
}

