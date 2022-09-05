//Ejercico1
//Herencia
class persona {
    constructor(nombre,documento){
        this._nombre=nombre
        this._documento=documento
    }
    get documento() {
        return this._documento;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

class aprendiz extends persona{
    constructor(nombre,documento,ficha){
        super(nombre,documento);
        this._ficha=ficha
    }
    get ficha() {
        return this._ficha;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
let obj1=new persona('Maria Gomez',1015999438)
let obj2=new aprendiz('Juan Valdez',1000219356,'ADSI')
obj2.nombre='Valentina Martinez' //set
console.log(obj2.ficha, obj2._nombre) //get
