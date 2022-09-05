//Calcular la operación x n sin utilizar la función pow 
function elevacion(x,n) {
    var total = 1;
    for ( var i=1; i<=n; i++) {
        total = total*x
    }
return total
}
console.log (elevacion (2,3))
//flecha 
const elevacion = (x,n) => {
    var total = 1;
    for ( var i=1; i<=n; i++) {
        total = total*x
    }
return total
}