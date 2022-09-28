//SetTimeout()
function Saludos(Nombre, Rol) {
    console.log(`Hola, mi nombre es ${Nombre}`);
    console.log(`Yo soy ${Rol}`);
}
setTimeout(Saludos, 3000, "Angie", "Aprendiz");
Saludos('Angie', 'Aprendiz')
    //clearTimeout()
const timeoutId = setTimeout(function() {
    console.log("Hola Mundo");
}, 2000);

clearTimeout(timeoutId);
console.log(`Tiempo de espera ID ${timeoutId} ha sido limpiado`);

//SetInterval()
let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
    identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

function mandarMensaje() {
    console.log("Ha pasado 1 segundo.");
}


//Callback 
function imprimir(callback) {
    callback();
}