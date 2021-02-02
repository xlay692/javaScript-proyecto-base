// ejemplo de && regresa true solo si ambos operadores son true 
let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("dentro del rango");
}
else{
    console.log("fuera de rango");

}
// ejemplo de OR regresa true si cuakquiera operando es true
let vacaciones = false, diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log ("padre puede asistir al juego del hijo")
}
else {
    console.log("padre esta ocuoado");
} 