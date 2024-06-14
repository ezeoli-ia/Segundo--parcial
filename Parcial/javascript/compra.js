document.addEventListener("DOMContentLoaded", function() {
    var elementosCn = document.querySelectorAll("[id^='C-']");

    elementosCn.forEach(function(elemento) {
        elemento.addEventListener("mousemove", function(event) {
            console.log("El mouse se movió sobre el elemento con ID:", event.target.id);
        });
    });
});