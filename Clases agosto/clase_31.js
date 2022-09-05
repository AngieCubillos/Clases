class persona {
    #nombre
    constructor(nombre){
        this.#nombre=nombre
    }
    get nombre(){
        return this.#nombre
    }
}
let obejeto=new persona('Angie')
console.log(obejeto.nombre)