//evento de click en el boton con el id btn-cambiar
document.getElementById("btn-cambiar").addEventListener("click",function(){
 var mensaje = document.getElementById("msj").value;
 //arreglo vacio para las nuevas letras
 var nuevoMensaje = "";
 //bucle ára recorrer las letras de la palabra
 for(i=0;i<mensaje.length ;i++){
     //variable para guardar el numero de la posicion  de la letra del mensaje
     var codMsj = mensaje[i].charCodeAt();
     //variable para obtener el nuevo codigo de mi nueva letra
     var codNuevo = codMsj + 2;
     //Agregar el nuevo codigo al arreglo
     //codigosNuevos.push(codNuevo);
     //Concatenar las nuevas letras en un solo string, la variable nuevoMensaje
     nuevoMensaje += String.fromCharCode(codNuevo);
     //dentro del bucle
     //document.getElementById("new_msj").innerHTML = nuevoMensaje;
 }
 //fuera del bucle, colocar mensaje final en la etiqueta span
 document.getElementById("new_msj").innerHTML = nuevoMensaje;
})
//Evento de click en el boton con el id 'btn-cambiar'
document.getElementById("btn-cambiar").addEventListener("click",function(){
    //Variable para guardar el valor del input
    var mensaje = document.getElementById("msj").value;
    //Arreglo vacío para los nuevas códigos
    var codigosNuevos = [];
    //Creamos una variable para el nuevo mensaje
    var nuevoMensaje = "";
    //Bucle para recorrer las letras de la palabra
    for(i=0;i<mensaje.length ;i++){
        var c = mensaje[i].toLowerCase();
        //Variable para guardar el número de la posición de la letra del mensaje
        var codMsj = c.charCodeAt();
        //Variable para obtener el nuevo código de mi nueva letra
        var codNuevo = codMsj + 2;
         if(codNuevo > 122){
             var d = codNuevo - 122;
             codNuevo = 96 + d;
         }
        //Agregar el nuevo codigo al arreglo
        codigosNuevos.push(codNuevo);
        //Concatenar las nuevas letras en un solo string, la variable nuevoMensaje
        nuevoMensaje;
    }
})