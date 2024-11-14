'use strict';

const titulos = document.querySelectorAll(".botonLista");


for (let titulo of titulos) {
    titulo.addEventListener("click", () => {
        // const listas = document.querySelectorAll(".listas ul");
        let lista = titulo.nextElementSibling;
        
        lista.style.display = lista.style.display === "block" ? "none" : "block";
        titulo.classList.toggle("active");

        for (let otroTitulo of titulos) {
            if (otroTitulo !== titulo) {
                otroTitulo.nextElementSibling.style.display = "none";
                otroTitulo.classList.remove("active");
            }
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
        resultadosBusqueda.innerHTML = "<p>Ingrese un nombre y/o apellido para la búsqueda</p>";
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
            {
                pelicula: "The Hateful Eight",
                personaje: "Oswaldo Mobray",
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
            {
                pelicula: "Kill Bill Vol.1",
                personaje: "Budd",
            },
            {
                pelicula: "Kill Bill Vol.2",
                personaje: "Budd",
            },
            {
                pelicula: "The Hateful Eight",
                personaje: "Joe Gage",
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
            {
                pelicula: "Kill Bill Vol.1",
                personaje: "The Bride",
            },
            {
                pelicula: "Kill Bill Vol.2",
                personaje: "The Bride",
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
            {
                pelicula: "Jackie Brown",
                personaje: "Ordell Robbie",
            },
            {
                pelicula: "Django Unchained",
                personaje: "Stephen",
            },
            {
                pelicula: "The Hateful Eight",
                personaje: "Major Marquis Warren",
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
    {
        nombre: "Pam",
        apellido: "Grier",
        roles: [
            {
                pelicula: "Jackie Brown",
                personaje: "Jackie Brown",
            },
        ]
    },
    {
        nombre: "Robert",
        apellido: "Forster",
        roles: [
            {
                pelicula: "Jackie Brown",
                personaje: "Max Cherry",
            },
        ]
    },
    {
        nombre: "Bridget",
        apellido: "Fonda",
        roles: [
            {
                pelicula: "Jackie Brown",
                personaje: "Melanie",
            },
        ]
    },
    {
        nombre: "Michael",
        apellido: "Keaton",
        roles: [
            {
                pelicula: "Jackie Brown",
                personaje: "Ray Nicolette",
            },
        ]
    },
    {
        nombre: "Robert",
        apellido: "De Niro",
        roles: [
            {
                pelicula: "Jackie Brown",
                personaje: "Louis Gara",
            },
        ]
    },
    {
        nombre: "David",
        apellido: "Carradine",
        roles: [
            {
                pelicula: "Kill Bill Vol.1",
                personaje: "Bill",
            },
            {
                pelicula: "Kill Bill Vol.2",
                personaje: "Bill",
            },
        ]
    },
    {
        nombre: "Daryl",
        apellido: "Hannah",
        roles: [
            {
                pelicula: "Kill Bill Vol.1",
                personaje: "Elle Driver",
            },
            {
                pelicula: "Kill Bill Vol.2",
                personaje: "Elle Driver",
            },
        ]
    },
    {
        nombre: "Luci",
        apellido: "Liu",
        roles: [
            {
                pelicula: "Kill Bill Vol.1",
                personaje: "O-Ren Ishii",
            },
        ]
    },
    {
        nombre: "Vivica A.",
        apellido: "Fox",
        roles: [
            {
                pelicula: "Kill Bill Vol.1",
                personaje: "Vernita Green",
            },
            {
                pelicula: "Kill Bill Vol.2",
                personaje: "Vernita Green",
            },
        ]
    },
    {
        nombre: "Kurt",
        apellido: "Russell",
        roles: [
            {
                pelicula: "Death Proof",
                personaje: "Stuntman Mike",
            },
            {
                pelicula: "The Hateful Eight",
                personaje: "John Ruth",
            },
        ]
    },
    {
        nombre: "Zoë",
        apellido: "Bell",
        roles: [
            {
                pelicula: "Death Proof",
                personaje: "Zoë Bell",
            },
        ]
    },
    {
        nombre: "Rosario",
        apellido: "Dawson",
        roles: [
            {
                pelicula: "Death Proof",
                personaje: "Abernathy",
            },
        ]
    },
    {
        nombre: "Brad",
        apellido: "Pitt",
        roles: [
            {
                pelicula: "Inglourious Basterds",
                personaje: "Lt. Aldo Raine",
            },
            {
                pelicula: "Once Upon a Time in Hollywood",
                personaje: "Cliff Booth",
            },
        ]
    },
    {
        nombre: "Diane",
        apellido: "Kruger",
        roles: [
            {
                pelicula: "Inglourious Basterds",
                personaje: "Bridget von Hammersmark",
            },
        ]
    },
    {
        nombre: "Christoph",
        apellido: "Waltz",
        roles: [
            {
                pelicula: "Inglourious Basterds",
                personaje: "Col. Hans Landa",
            },
            {
                pelicula: "Django Unchained",
                personaje: "Dr. King Schultz",
            },
        ]
    },
    {
        nombre: "Mélanie",
        apellido: "Laurent",
        roles: [
            {
                pelicula: "Inglourious Basterds",
                personaje: "Shosanna",
            },
        ]
    },
    {
        nombre: "Michael",
        apellido: "Fassbender",
        roles: [
            {
                pelicula: "Inglourious Basterds",
                personaje: "Lt. Archie Hicox",
            },
        ]
    },
    {
        nombre: "Jamie",
        apellido: "Foxx",
        roles: [
            {
                pelicula: "Django Unchained",
                personaje: "Django",
            },
        ]
    },
    {
        nombre: "Leonardo",
        apellido: "DiCaprio",
        roles: [
            {
                pelicula: "Django Unchained",
                personaje: "Calvin Candie",
            },
            {
                pelicula: "Once Upon a Time in Hollywood",
                personaje: "Rick Dalton",
            },
        ]
    },
    {
        nombre: "Kerry",
        apellido: "Washington",
        roles: [
            {
                pelicula: "Django Unchained",
                personaje: "Broomhilda von Shaft",
            },
        ]
    },
    {
        nombre: "Walton",
        apellido: "Goggins",
        roles: [
            {
                pelicula: "Django Unchained",
                personaje: "Billy Crash",
            },
            {
                pelicula: "The Hateful Eight",
                personaje: "Sheriff Chris Mannix",
            },
        ]
    },
    {
        nombre: "Jennifer Jason",
        apellido: "Leigh",
        roles: [
            {
                pelicula: "The Hateful Eight",
                personaje: "Daisy Domergue",
            },
        ]
    },
    {
        nombre: "Demian",
        apellido: "Bichir",
        roles: [
            {
                pelicula: "The Hateful Eight",
                personaje: "Bob",
            },
        ]
    },
    {
        nombre: "Bruce",
        apellido: "Dern",
        roles: [
            {
                pelicula: "The Hateful Eight",
                personaje: "General Sandy Smithers",
            },
            {
                pelicula: "Once Upon a Time in Hollywood",
                personaje: "George Spahn",
            },
        ]
    },
    {
        nombre: "Margot",
        apellido: "Robbie",
        roles: [
            {
                pelicula: "Once Upon a Time in Hollywood",
                personaje: "Sharon Tate",
            },
        ]
    },
    {
        nombre: "Margaret",
        apellido: "Qualley",
        roles: [
            {
                pelicula: "Once Upon a Time in Hollywood",
                personaje: "Pussycat",
            },
        ]
    },
    {
        nombre: "Al",
        apellido: "Pacino",
        roles: [
            {
                pelicula: "Once Upon a Time in Hollywood",
                personaje: "Marvin Schwarz",
            },
        ]
    },
];
localStorage.setItem("actores", JSON.stringify(actores));