//Objetos: estado y comportamiento 
var x = 12
    //El constructor se activa con la palabra new 

//ejemplo 1 
class animal {
    constructor(nombre) {
            this._nombre = nombre;
            //console.log ('Se activo el constructor')
        }
        //camelle case
        /*getNombre(){
          return this.Nombre;  
        }*/
    //Busca el valor
        get nombre() {
            return this._nombre;
        }
        /*setNombre(nombre){
            this.nombre=nombre
        }*/
    //Set cambia el valor 
    set nombre(nombre) {
        this._nombre = nombre;
    }
    mensaje() {
        console.log('soy un mensaje')
    }
}
var objeto1 = new animal('conejo');
console.log(objeto1)
    //objeto1.setNombre('Liebra')
objeto1.nombre = 'conejo domestico'
    //console.log(objeto1.getNombre)
console.log(objeto1.nombre)
    //console.log(typeof(objeto1))