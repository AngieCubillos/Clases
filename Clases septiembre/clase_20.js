//Usar las funciones de Mayusculas y minusclas con el async y await 
function FunMayusculas(a){
    return new Promise((resolve)=>{
        if (true) {
        resolve();
        let contar = 0
        let Mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        setTimeout(() => {
        for (var i = 0; i < Mayusculas.length; i++) {
            for (var x = 0; x < a.length; x++) {
            if(a[x]==Mayusculas[i]){
            contar+=1;
            }
        }
    }
    console.log('El texto normal es: ' + a)
        setTimeout(() => {
            console.log('El texto en mayusculas es: ' + a.toUpperCase());
        }, 4000)
        setTimeout(() => {
            console.log('El piero de letras mayusculas es de:','' + contar)
        }, 6500);
        }, 2000);
        } 
    })
};


function FunMinusculas(a){
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve()
            var contar1 = 0
    var Minusculas = "abcdefghijklmnopqrstuvwxyz"
    setTimeout(() => {
        for (var i = 0; i < Minusculas.length; i++) {
            for (var x = 0; x < a.length; x++) {
            if(a[x]==Minusculas[i]){
            contar1+=1;
                }
              }
            }
            console.log('El texto normal: ' + a)
    setTimeout(() => {
        console.log('El texto en minuscula: ' + a.toLowerCase());
    }, 3000)
    setTimeout(() => {
        console.log('El piero de letras minuscula es de:','' + contar1)
    }, 5500);
        }, 11000);
        } else {
            reject()
        }
    })
};  
// pi=poblacion
// r=trasa de cresimiento
// nt=formula
function crecimiento(){
    let pi=Math.trunc((Math.random()*10000-1000)+1000 )
    let nacimiento=0
    let muerte=0
    let r=0
    let nt=0
    for(let i=0; i<20;i++){
        nacimiento=(pi*(Math.trunc(Math.random()*10-1)+1))/100
        muerte=Math.round(( Math.random()*3-1)+1)
        muerte=(pi+muerte)/100
        r=(nacimiento-muerte)/pi
        nt=pi*(1+r)**i
        console.log(`Poblacion ${Math.trunc(nt)}`)
        console.log(`Crecimiento ${r}`)
    }
}
crecimiento()
//hacer dos promesas donde una imprima 5 segundos despues la cantidad de personas que se le regalen una casa
function crecimiento(){
    let pi=Math.trunc((Math.random()*10000-1000)+1000 )
    let nacimiento=0
    let muerte=0
    let r=0
    let nt=0
    for(let i=0; i<20;i++){
        nacimiento=(pi*(Math.trunc(Math.random()*10-1)+1))/100
        muerte=Math.round(( Math.random()*3-1)+1)
        muerte=(pi+muerte)/100
        r=(nacimiento-muerte)/pi
        nt=pi*(1+r)**i
        console.log(`Poblacion ${Math.trunc(nt)}`)
        console.log(`Crecimiento ${r}`)
    }
}
crecimiento()

