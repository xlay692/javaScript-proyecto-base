let hora = 19 ;
let mensaje;

if (hora >= 6 && hora <= 11 ){
    mensaje = ("buenos dias");
}
else if ( hora >= 12 && hora <= 18 ){
    mensaje = ("buenas tardes");
}
else if ( hora >= 19 && hora <= 24){
    mensaje = ("buenas noches")
}
else if (hora  >= 0 && hora <= 6 ){
    mensaje = ("durmiendo")
}
else {
    mensaje  = "valor incorrecto"
}

console.log(mensaje)