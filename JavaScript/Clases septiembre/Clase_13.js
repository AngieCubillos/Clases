//Time Funciones
function externa() {
    console.log('Funcion externa SetTimeout')
}

const FuncionExt = () => {
    console.log('Funcion externa Flecha')
}

setTimeout(() => {
    console.log('Yo amo Soacha')
}, 2000);

setTimeout(() => {
    console.log('Función clasica')
}, timeout);

setTimeout(externa, 5000);
setTimeout(FuncionExt, 6000);

setInterval(() => {
    console.log('Se repite infinitamente')
}, 3000);

let timerId = setInterval(() => console.log('Amo el SENA'), 2000)
    //Despues de 7 segundos para 
settimeout(() => {
    clearInterval(timerId)
}, 7000)

//Ejercici01
//Escriba un programa que escriba un contador de 1 hasta 20 donde cada numero se muentre cada dos segundos 

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, (i * 2000));
}

//Callback
function Receptora(cb1, cb2, parametro) {
    cb1();
    setTimeout(() => {
        console.log('Dentro de la funcion receptora')
    }, 0);
    cb2(parametro)
}

function FuncionArgumento(parametro) {
    console.log(`${parametro} de la funcion Argumento`);
}

Receptora(() => console.log('Funcion Anonima'), FuncionArgumento, 100)

//Ejercicio2
let saludo = '¡HOLA!';
console.log(saludo.toLowerCase()); //tolowerCase pasa de mayuscula a minuscula
let Saludo2 = '¡estoy gritando!'
console.log(Saludo2.toUpperCase()); //toUpperCase pasa de minuscula a mayuscula
function Ejemplo() {
    let Frase = 'Leer Es Resistir'
    let Autor = 'Mario Mendoza'
    let Libro = 'Akelarre'
    console.log(Libro.toUpperCase())
    console.log(Autor.slice())
    console.log(Frase.toLocaleLowerCase())
}
Ejemplo()

function MAYUSCULA(cadena){
    var a = cadena.split('')
    var mayuscula=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var cont=0;
    for (let i = 0; i < a.length; i++) {
      for (let k = 0; k < mayuscula.length; k++) {
        if (a[i]==mayuscula[k]) {
            cont=cont+1
        }
      } 
    }
    return `las mayusculas son:${cont}`
}

function minuscula(cadena){
    var a = cadena.split('')
    var minuscula=['a','b','c','d','e','f','g','h','i','j','k','l','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var cont=0;
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < minuscula.length; k++) {
          if (a[i]==minuscula[k]) {
              cont=cont+1
          }
        } 
      }
      return `las minusculas son:${cont}`
}

function general(cb1,cb2,cadena){

    console.log(cb1(cadena),cb2(cadena))
    console.log('La frase en mayuscula es:',cadena.toUpperCase());
    console.log('la frase en minuscula es:', cadena.toLowerCase());
}
general(MAYUSCULA,minuscula,'Me Gusta Leer');

