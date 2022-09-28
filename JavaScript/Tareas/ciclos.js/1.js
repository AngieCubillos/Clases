// Determinar los divisores de un número introducido por teclado 
function divisores(n) {
    var contador = 1;
    while (contador <= n) {
        if (n % contador == 0) {
            console.log(contador);
        }
        contador++;
    }    
}
divisores(48)
//flecha 
const divisores = n => {
    var contador = 1;
    while (contador <= n) {
        if (n % contador == 0) {
            console.log(contador);
        }
        contador++;
    }    
}
divisores(48)


