//Promesas 
function base() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve()
            setTimeout(() => {
                console.log('Linea de codigo dentro de la funcion promesa')
            }, 500)
        } else {
            reject()
        }
    })
}

function auxiliar() {
    console.log('funcion auxiliar')
}

base()
    .then(() => {
        console.log('en el .then')
    })
    .then(auxiliar)