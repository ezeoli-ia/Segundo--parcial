var apartadoCompra = document.getElementById("apartado-compra");
var clickCount = 0;

apartadoCompra.addEventListener("click", function() {
    clickCount++;
    console.log("Número de clics en 'apartado-compra': " + clickCount);
});


var apartados = ["apartado-compra", "apartado-venta", "apartado-alquiler"];
var mouseMoveCounts = {
    "apartado-compra": 0,
    "apartado-venta": 0,
    "apartado-alquiler": 0
};

apartados.forEach(function(apartadoId) {
    var apartado = document.getElementById(apartadoId);
    apartado.addEventListener("mousemove", function() {
        mouseMoveCounts[apartadoId]++;
        console.log(`Número de movimientos de mouse sobre '${apartadoId}': ${mouseMoveCounts[apartadoId]}`);
    });
});
$(document).ready(function(){
    $(".imagenFamilia").click(function(){
        var imagen = $(this);
        imagen.slideUp(500, function() {
            setTimeout(function() {
                imagen.slideDown();
            }, 1);
        });
    });
});