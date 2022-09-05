//Determinar si un número es o no es perfecto.
//NUMEROS PERFECTOS
function perfecto(num) {
    let divisores = [];
    let perfect = 0;
    for (let i = 1; i < num; i++) {
        if (num%i==0) {
            perfect = perfect + i 
        }
    }
    if  (perfect==num) {
        return `${num} es perfecto`;
    }
    else{
        return `${num} NO es perfecto`;
    }
    }
    console.log(perfecto(12))
//flecha 
const perfecto = num => {   
    let divisores = [];
    let perfect = 0;
    for (let i = 1; i < num; i++) {
        if (num%i==0) {
            perfect = perfect + i 
        }
    }
    if  (perfect==num) {
        return `${num} es perfecto`;
    }
    else{
        return `${num} NO es perfecto`;
    }
    }
    console.log(perfecto(12))