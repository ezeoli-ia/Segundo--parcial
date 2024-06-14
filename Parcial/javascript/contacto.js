$(document).ready(function(){
    $(".imgVenta").click(function(){
        var imagen = $(this);
        imagen.slideUp(500, function() {
            setTimeout(function() {
                imagen.slideDown();
            }, 10000000);
        });
    });
});