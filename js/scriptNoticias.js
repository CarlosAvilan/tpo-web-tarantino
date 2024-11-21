'use strict';

const botonesGaleria = document.querySelectorAll(".buttonGallery");
const galerias = [
    ["images/news1/onceseries2.jpg", "images/news1/onceseries3.jpg", "images/news1/onceseries4.jpg"],
    ["images/news2/kiddo2.jpg", "images/news2/kiddo3.jpg", "images/news2/kiddo4.jpg"],
    ["images/news3/secreto2.jpg", "images/news3/secreto3.jpg", "images/news3/secreto4.jpg"],
]
const leyendas = [
    ["Leonardo DiCaprio y Brad Pitt en sus roles: Rick Dalton y Cliff Booth", "Brad Pitt, Margot Robbie y Leonardo DiCaprio, el trío de protagonistas", "Foto promocional de DiCaprio y Pitt junto a Quentin Tarantino"],
    ["Uma Thurman en su rol protagónico: The Bride", "Sergio Leone, una de las principales influencias de Tarantino", "Collage de los westerns de Sergio Leone, con Clint Eastwood como figura icónica"],
    ["Guillermo Francella y Ricardo Darín durante una de las escenas", "El director Campanella y el elenco posan con el Oscar junto a Tarantino y Almodóvar", "Villamil y Darín en una de los momentos más tensos de la película"],
]


for (let i=0; i < botonesGaleria.length; i++) {
    botonesGaleria[i].addEventListener("click", () => {

        let modal = document.createElement("div");
        modal.setAttribute("id", "modal");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        let modalContent = document.createElement("div");
        modalContent.style.position = "relative";
        modalContent.style.width = "80%";
        modalContent.style.height = "80%";
        modalContent.style.overflow = "hidden";
        modalContent.style.backgroundColor = "#fff";        
        modalContent.style.padding = "20px";
        modalContent.style.display = "flex";
        modalContent.style.flexDirection = "column";
        modalContent.style.justifyContent = "center";
        modalContent.style.alignItems = "center";

        let img = document.createElement("img");
        img.alt = "Imagen de la galería";
        img.style.marginTop = "10px";
        img.style.marginBottom = "10px";
        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.objectFit = "contain";
        modalContent.appendChild(img);

        let textoLeyenda = document.createElement("p");
        textoLeyenda.style.marginTop = "10px";
        textoLeyenda.style.textAlign = "center";
        textoLeyenda.style.fontSize = "1.0em";
        modalContent.appendChild(textoLeyenda);    

        let botonCerrar = document.createElement("button");
        botonCerrar.innerText = "X";
        botonCerrar.style.minWidth = "20px";
        botonCerrar.style.fontSize = "1.2em";
        botonCerrar.style.position = "absolute";
        botonCerrar.style.top = "10px";
        botonCerrar.style.right = "10px";
        botonCerrar.style.backgroundColor= "white";
        botonCerrar.style.color = "black";
        botonCerrar.style.fontWeight = "bold";
        botonCerrar.style.padding = "10px";
        botonCerrar.style.borderRadius = "10px";
        botonCerrar.style.cursor = "pointer";
        botonCerrar.style.zIndex = "1001";        
        
        modalContent.appendChild(botonCerrar);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        let indice = 0;
        img.src = galerias[i][indice];
        textoLeyenda.textContent = leyendas[i][indice];

        let intervalo = setInterval( () => {
            indice = (indice + 1) % galerias[i].length;
            img.src = galerias[i][indice];
            textoLeyenda.textContent = leyendas[i][indice];
            console.log(`Current image: ${img.src}, Current legend: ${textoLeyenda.textContent}`)
        }, 2500);

        botonCerrar.addEventListener("click", () => {
            clearInterval(intervalo);
            document.body.removeChild(modal);
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                clearInterval(intervalo);
                document.body.removeChild(modal);
            }
        });
    });
}