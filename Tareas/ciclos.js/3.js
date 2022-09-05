//Determinar si un numero es o no es primo
function primos () {
    let n = Math.round(Math.random() * 100);
let = esPrimo = true;
if (n == 1 || n == 0) {
    esPrimo = false;
} else {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            esPrimo = false;
        }
    }
}
if (esPrimo) {
    console.log(n + " es primo");
} else { console.log(n + " no es primo"); }
}primos()

//flecha 
const primos = () => {
    let n = Math.round(Math.random() * 100);
let = esPrimo = true;
if (n == 1 || n == 0) {
    esPrimo = false;
} else {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            esPrimo = false;
        }
    }
}
if (esPrimo) {
    console.log(n + " es primo");
} else { console.log(n + " no es primo"); }
}
primos()