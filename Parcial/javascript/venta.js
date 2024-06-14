document.addEventListener("DOMContentLoaded", function() {
    var botonEnviar = document.querySelector(".boton");

    botonEnviar.addEventListener("focus", function() {
        console.log("El botón de enviar ha recibido el foco.");
    });
});