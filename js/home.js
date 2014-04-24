    function pegarValor() {
    var valor = $("#home").val();
    
    if(valor == "lights on"){
         $.post("control/serial_port.php", {valor:"a"});
    }
    if(valor == "lights off"){
         $.post("control/serial_port.php", {valor:"b"});
    }
    
    //STYLES
    if (valor == "red") {
        $("#body-site").css("background", "#e12a2b");
    }
    if (valor == "blue") {
        $("#body-site").css("background", "#405d9b");
    }
    if (valor == "black") {
        $("#body-site").css("background", "#171814");
    }
    if (valor == "yellow") {
        $("#body-site").css("background", "#fcd209");
    }
    if (valor == "background black") {
        $("body").css("background", "#171814");
    }
    if (valor == "background red") {
        $("body").css("background", "#e12a2b");
    }
    if (valor == "background blue") {
        $("body").css("background", "#405d9b");
    }

}