//Ejemplo de funciones 
function primo(num) {
    var cont = 0;
    for (let i = 1; i < num; i++) {
        num % i == 0 ? cont++ : cont = cont;
    }
    return cont > 2 ? 'NO es primo' : 'SI es primo'

}
console.log(primo(10))

//Escriba una funcion que lea una caena de texto y diga cuantas vocales tiene, cuantas consonantes, cuantas no son consonantes y no son vocales 

function cadena(texto) {
    var n = texto.split('')
    console.log(n)
    var vocales = ['a', 'e', 'i', 'o', 'u']
    var consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    var cont = 0;
    var cont1 = 0;
    var cont2 = 0;
    for (let i = 0; i < n.length; i++) {
        if (consonantes.indexOf(n[i]) > -1) {
            cont++
        } else if (vocales.indexOf(n[i] > -1)) {
            cont1++
        } else {
            cont2++
        }
    }

    return `vocales:${cont1} consonantes: ${cont} otros: ${cont2} `
}
console.log(cadena('angie'))

//Productos literales. No se instancia 

var persona = {
    nombre: 'Angie Cubillos',
    id: 12345,
    datoscompletos: () => console.log(`${persona.nombre}${persona.id}`),
}
console.log(persona.nombre);
console.log(persona['id']);
persona.datoscompletos();
console.log(persona);

persona.direccion = 'calle con kra'
console.log(persona);
persona['nombre'] = 'Ivan Jaramillo'
console.log(persona)
delete persona.id;
console.log(persona)

//Generar cuatro objetos de figuras geometricas 

var cuadrado = {
    lados1: 2,
    perimetro: () => console.log(cuadrado.lados1 * 4),
    area: () => console.log(cuadrado.lados1 ** 2)
}
cuadrado.area()
cuadrado.perimetro()

var triangulo = {
    base: 6,
    altura: 15,
    hipotenusa: function() {
        return ((this.base ** 2) + (this.altura ** 2)) ** (1 / 2)
    },
    perimetro: (base, lado) => (lado * 2) + base,
    areaf: function() {
        return (this.base * this.altura) / 2
    },
}
console.log(triangulo.areaf())
console.log(triangulo.hipotenusa())

var circulo = {
    radio: 10,
    perimetrof: () => console.log((2 * 3.1416) * circulo.radio),
    area : () => console.log ((3.1416 * circulo.radio **2))
}
circulo.perimetrof()
circulo.area()

function circunferencia(objeto) {
    if (objeto.hasOwnProperty('radio')) {
        console.log(`la circunferencia es: ${objeto.radio*3.1416*2}`)
    } else {
        console.log(`el objeto no puede generar una circunferencia`)
    }

}

circunferencia(circulo);

var rombo = {
    lados : 10,
    vertical :16,
    horizontal : 12,
    perimetro: () => console.log(rombo.lados * 4),
    area: ()=> console.log(rombo.vertical * rombo.horizontal /2)
}
rombo.perimetro ()
rombo.area ()

