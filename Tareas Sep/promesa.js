//Promesas
function MAYUSCULA(cadena){
    return new Promise ((resolve,reject)=>{
        if (false) {
    resolve()
    var a = cadena.split('')
    var mayuscula=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var cont=0;
    for (let i = 0; i < a.length; i++) {
      for (let k = 0; k < mayuscula.length; k++) {
        if (a[i]==mayuscula[k]) {
            cont=cont+1
    console.log('AMO LEER')
        }
      } 
    }
        }else{
            reject
        }
    })
}
MAYUSCULA()
    .then (()=>{
        console.log('EJEMPLO')
    })

function minuscula(cadena){
    return new Promise ((resolve,reject)=>{
        if(true) {
            resolve()
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
        }else{
            reject
        }
    })
      return `las minusculas son:${cont}`
}

function general(cb1,cb2,cadena){

    console.log(cb1(cadena),cb2(cadena))
    console.log('La frase en mayuscula es:',cadena.toUpperCase());
    console.log('la frase en minuscula es:', cadena.toLowerCase());
}
general(MAYUSCULA,minuscula,'Me Gusta Leer');



