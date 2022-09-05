//Examen 
//LLenar tres arreglos con numero aleatorios 
let vect9 = [];
    tamaño5 = Math.round((Math.random()) * 100)
    suma = 0 
console.log ('valor de la variable: ' + tamaño5)
for (let i = 0; i < tamaño5; i++) {
    vect9[i] = Math.round(Math.random() * 100)
}
console.log(vect9)
for (let i = 0; i < vect9.length; i++) {
    suma = suma + vect9[i]
}
console.log(suma)
let vect10 = [];
    tamaño6 = Math.round((Math.random()) * 50)
    suma = 0 
console.log ('valor de la variable: ' + tamaño6)
for (let i = 0; i < tamaño6; i++) {
    vect10[i] = Math.round(Math.random() * 50)
}
console.log(vect10)
for (let i = 0; i < vect10.length; i++) {
    suma = suma + vect10[i]
}
console.log(suma)    
let vect11 = [];
    tamaño7 = Math.round((Math.random()) *5)
    suma = 0
console.log ('valor de la variable: ' + tamaño7)
for (let i = 0; i < tamaño7; i++) {
    vect11[i] = Math.round(Math.random() * 5)
}
console.log(vect11)
for (let i = 0; i < vect11.length; i++) {
    suma = suma + vect11[i]
}
console.log(suma)

//Examen 
//llenar tres arreglos con numeros aleatorios, el tamaño de los arreglos estara: minimo 5 maximo 100 elementos.   arreglo entre 0 y 100
let A = []
let V = Math.round((Math.random()*20-5)+10)
console.log(V)
for (let i = 0; i < V; i++){
    A [i]  = Math.round(Math.random()*100)
}
console.log(A)

let C = []
let H = Math.round((Math.random()*20-5)+5)
console.log(H)
for (let i = 0; i < H; i++){
    C [i]  = Math.round(Math.random()*100)
}
console.log(C)

let M = []
let L = Math.round((Math.random()*20-5)+5)
console.log(L)
for (let i = 0; i < L; i++){
    f [i]  = Math.round(Math.random()*100)
}
console.log(f)


//cual de los tre arreglos es el mas grande?

if ((V >= H)&&(V >= L)){
   console.log('el arreglo',V,'es mayor a',H,'y',L);
} else if ((H >= V)&&(H >= L)){
    console.log('el arreglo',H,'es mayor a',,'y',);
} else ((L >= V)&&(L >= H))
    console.log('el arreglo',g,'es mayor a',,'y',);