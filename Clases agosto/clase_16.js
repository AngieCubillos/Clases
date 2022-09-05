//Ejercicio de practica 3.2 
let producto = ["leche","pan","huevos","cafe","arepa"]
console.log (producto)
//eliminar el ultimo valor
producto.pop()
console.log (producto)
//ordenar alfabeticamente
producto.sort()
console.log(producto)
//renombrar un valo 
producto[0] = 'chocolate'
console.log(producto)
//consultar un valor
let producto2 = producto.indexOf (producto[2])
console.log (producto2)
console.log(producto[2])
//salir 
var i = prompt("¿desea salir?")
var a = "si"

if (i==a) {
    window.close()
}

//Funciones 
function sumar (a,b) {
    return a+b;
}
let total = (10+20);
console.log (total) 

//Ejemplos1
function saludar () {
    console.log ('Hola soy Angie')
}
saludar();

//Ejemplo2 
function saludar (nombre) {
    console.log ('hola')
}
saludar ('Sena Soacha')

//Ejemplo3 
function saludar (nombre) {
    console.log (`hola ${nombre}`)
}
saludar ('Sena Soacha')