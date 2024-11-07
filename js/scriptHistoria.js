
//Botón para ocultar y mostrar el texto completo de la sección Historia

document.getElementById("botonLeerMas").addEventListener("click", (e) => {
    const textoCompleto = document.getElementById("textoCompletoHistoria");
    const boton = document.getElementById("botonLeerMas");

    if (textoCompleto.style.display === "none") {
        //Paso a mostrar el texto completo
        textoCompleto.style.display = "block";
        boton.innerText = "Leer menos";
    } else {
        //Paso a ocultar el resto del texto
        textoCompleto.style.display = "none";
        boton.innerText = "Leer más";
    }
});