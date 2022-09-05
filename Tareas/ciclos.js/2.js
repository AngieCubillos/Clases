//¿Cuáles y cuántos son los números primos comprendidos entre 1 y 1000? 

function primosn() {
    var contador = 0;
for(let i = 1;i <= 1000;i++){
    var primo = [];
    for (let a = 0; a <= i; a++) {
    if (i %a ==0) {
        primo.push (i)
    }
    
    }
    if (primo.length<3) {
        console.log (i)
        contador=contador+1
    }

}
console.log ('Total de numeros primos' , contador)
}
primosn()
//flecha 
const primosn = () => {
    var contador = 0;
for(let i = 1;i <= 1000;i++){
    var primo = [];
    for (let a = 0; a <= i; a++) {
    if (i %a ==0) {
        primo.push (i)
    }
    
    }
    if (primo.length<3) {
        console.log (i)
        contador=contador+1
    }

}
console.log ('Total de numeros primos' , contador)
}
primosn()