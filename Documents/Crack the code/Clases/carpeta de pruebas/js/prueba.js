$(".show-more a").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    

    if(linkText === "Show more"){
        linkText = "Show less";
        $content.switchClass("hideContent", "showContent", 400);
    } else {
        linkText = "Show more";
        $content.switchClass("showContent", "hideContent", 400);
    };

    $this.text(linkText);
});



//Declaración de varibles 

let vidas = 3; //Número entero
let promedio = 20.0; //Dato en porcentaje
let nombre = "Juan" //String

//Declarar variables sobre partido de deporte (Futbol)
let goles_marcados = 2;
let cantidad_jugadores_campo = 22;
let tiempo_juego = 90;
let juador_destacado = "Messi";
let tarjeta_roja = 0;

//Red social --> publicaciones
let reacciones_disponibles = ["Me gusta","Me divierte","Me entristece"];
let correo_electronico = "usuario_78@gmail.com"; //string
let clave = "usuario1234";
let url_foto_perfil = "assets.mysocialnetwork.com?=id/assets/img/perfil.png";
let nombre = "Juan Gutierrez";
let edad = 20;
let cant_notificaciones = 0;
let genero = "Masculino"
let nmr_amigos = 421;

let estado_cuenta = true; //booleano
let privacidad = ["Solo yo","Solo amigos","Público"]; //Array

$(document).ready(function(){
    $("#btn-ingresar").click(function(){
        $("#mail").val();
    var correo = $("#mail").val();
    var password = $("#pass").val();

   if(correo == "ctc@gmail.com" & clave == "1234" ){
       alert("ingreso correcto") //ingresar

   }
   else{
       alert("ingreso invalido") //ingreso invalido
   }
    })

    
})
