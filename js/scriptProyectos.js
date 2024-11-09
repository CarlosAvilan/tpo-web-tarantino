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

const formulario = document.getElementById("formulario");
const inputBusqueda = document.getElementById("inputBusqueda");
const resultadosBusqueda = document.getElementById("resultadosBusqueda");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();  //Evita que la página se recargue por el formulario

    let busquedaActor = inputBusqueda.value.toLowerCase().trim();

    //Borramos con esto cualquier resultado anterior
    resultadosBusqueda.innerHTML = "";

    if (busquedaActor) {
        let dataActores = JSON.parse(localStorage.getItem("actores")) || [];
        console.log(JSON.parse(localStorage.getItem("actores")));

        let resultadoFiltrado = dataActores.filter(actor => {
            let nombreCompleto = `${actor.nombre.toLowerCase()} ${actor.apellido.toLowerCase()}`;

            return actor.nombre.toLowerCase().includes(busquedaActor) || actor.apellido.toLowerCase().includes(busquedaActor) || nombreCompleto.includes(busquedaActor);
        });

        if (resultadoFiltrado.length > 0) {
            let listaResultados = document.createElement("ul");

            for (let actor of resultadoFiltrado) {
                let itemActor = document.createElement("li");
                itemActor.textContent = `${actor.nombre} ${actor.apellido}`;
                itemActor.classList.add("actor-item");
                listaResultados.appendChild(itemActor);
                
                for (let rol of actor.roles) {
                let itemRol = document.createElement("li");
                itemRol.textContent = `${rol.personaje} en ${rol.pelicula}`;
                itemRol.classList.add("rol-item");
                listaResultados.appendChild(itemRol);
                }
            }
            resultadosBusqueda.appendChild(listaResultados);
        } else {
            resultadosBusqueda.innerHTML = "<p>No se encontraron resultados</p>";
        }
    } else {
        //Si el usuario hace click en buscar, pero no ha escrito texto para buscar
        resultadosBusqueda.innerHTML = "<p>Ingrese un actor para la búsqueda</p>";
    }
});

const actores = [
    {
        nombre: "Harvey",
        apellido: "Keitel",
        roles: [
            {
                pelicula: "Reservoir Dogs",
                personaje: "Mr. White",
            },
        ]
    },
    {
        nombre: "Steve",
        apellido: "Buscemi",
        roles: [
            {
                pelicula: "Reservoir Dogs",
                personaje: "Mr. Pink",
            },
        ]
    },
    {
        nombre: "Tim",
        apellido: "Roth",
        roles: [
            {
                pelicula: "Reservoir Dogs",
                personaje: "Mr. Orange",
            },
            {
                pelicula: "Pulp Fiction",
                personaje: "Pumpkin",
            },
        ]
    },
    {
        nombre: "Michael",
        apellido: "Madsen",
        roles: [
            {
                pelicula: "Reservoir Dogs",
                personaje: "Mr. Blonde",
            },
        ]
    },
    {
        nombre: "Chris",
        apellido: "Penn",
        roles: [
            {
                pelicula: "Reservoir Dogs",
                personaje: "Nice Guy Eddie",
            },
        ]
    },
    {
        nombre: "Lawrence",
        apellido: "Tierney",
        roles: [
            {
                pelicula: "Reservoir Dogs",
                personaje: "Joe Cabot",
            },
        ]
    },
    {
        nombre: "John",
        apellido: "Travolta",
        roles: [
            {
                pelicula: "Pulp Fiction",
                personaje: "Vincent Vega",
            },
        ]
    },
    {
        nombre: "Uma",
        apellido: "Thurman",
        roles: [
            {
                pelicula: "Pulp Fiction",
                personaje: "Mia Wallace",
            },
        ]
    },
    {
        nombre: "Samuel L.",
        apellido: "Jackson",
        roles: [
            {
                pelicula: "Pulp Fiction",
                personaje: "Jules Winnfield",
            },
        ]
    },
    {
        nombre: "Bruce",
        apellido: "Willis",
        roles: [
            {
                pelicula: "Pulp Fiction",
                personaje: "Butch Coolidge",
            },
        ]
    },
    {
        nombre: "Amanda",
        apellido: "Plummer",
        roles: [
            {
                pelicula: "Pulp Fiction",
                personaje: "Honey Bunny",
            },
        ]
    },
    {
        nombre: "Ving",
        apellido: "Rhames",
        roles: [
            {
                pelicula: "Pulp Fiction",
                personaje: "Marsellus Wallace",
            },
        ]
    },
];
localStorage.setItem("actores", JSON.stringify(actores));