//Una compañía editorial produce tanto libros impresos como audio-libros en discos compactos. Diseñe una clase denominada Publicación que almacene el título (cadena) y el precio (numérico real) de una publicación. A partir de esta clase, derive dos clases: Libro a la cual le agregue el número de páginas (entero) y CD, a la cual le agregue eltiempo de reproducción en minutos (numérico real). Cada una de las clases debe tener propiedades para acceder a sus respectivos datos. Elabore un diagrama de clases UML indicando las relaciones de herencia y codifique un sistema mediante el cual se generen instancias de las clases Libro y CD, donde el usuario capture sus datos y se inserten en los respectivos objetos. Diseñe la forma que se muestra a continuación.
class Publicación {
    constructor(titulo, precio) {
            this._titulo = titulo
            this._precio = precio
        }
    get cadena() {
        return this._titulo
    }
    get precio() {
        return this._precio
    }
}
class Libro extends Publicación {
    constructor(titulo, precio,numerodepaginas) {
        super(titulo, precio);
        this._numerodepaginas = numerodepaginas
    }
    
}
class CD extends Publicación {
    constructor(titulo, precio,tiempodereproduccion) {
        super(titulo, precio);
        this._tiempodereproduccion = tiempodereproduccion
    }
    
}
let obj1 = new Publicación('Akelarre',50000)
console.log(obj1)
let obj2 = new Libro('Satanas',70000,240)
console.log(obj2)
let obj3 = new CD('Lady Masacre',50000,`6 Horas`)
console.log(obj3)

//Una agencia vendedora de autos desea un sistema computacional para administrar los datos de sus vehículos y clasificarlos por tipo. Todos los autos tienen los siguientes datos: (Número de serie del motor, Marca, Año, Precio).Los vehículos se clasifican en autos compactos, autos de lujo, camionetas y vagonetas. Para los autos y vagonetas, también es importante almacenar la cantidad de pasajeros; mientras que para las camionetas se debe controlar la capacidad de carga en kgs. y la cantidad de ejes y de rodadas. Modele este sistema con diagramas de clases en UML e instancie cada una de las clases, asignándole datos mediante sus respectivas propiedades. Agregue un constructor con parámetros a cada clase para inicializar sus datos e invoque el constructor de la clase base desde el constructor de cada clase derivada (no utilice constructores default). Implemente la sobrescritura del método ToString() para mostrar los datos de cada tipo de auto. NOTA: No se permiten componentes duplicados en las clases ni clases vacías (sin elementos).

class Autos {
constructor(Númerodeseriedelmotor, Marca, Año, Precio) {
        this._Númerodeseriedlmotor = Númerodeseriedelmotor
        this._Marca = Marca
        this._Año = Año
        this._Precio = Precio
    }
}

class Auto_Compacto extends Autos {
    constructor(Númerodeseriedelmotor, Marca, Año, Precio,CantidadPasajeros){
        super(Númerodeseriedelmotor, Marca, Año, Precio);
        this._CantidadPasajeros = CantidadPasajeros
    }
   
}

class Auto_De_Lujo extends Autos {
    constructor(Númerodeseriedelmotor, Marca, Año, Precio,CantidadPasajeros){
        super(Númerodeseriedelmotor, Marca, Año, Precio);
        this._CantidadPasajeros = CantidadPasajeros
    }
    
}

class Vagoneta extends Autos {
    constructor(Númerodeseriedelmotor, Marca, Año, Precio,CantidadPasajeros){
        super(Númerodeseriedelmotor, Marca, Año, Precio);
        this._CantidadPasajeros = CantidadPasajeros
    }
    
}

class Camioneta extends Autos {
    constructor(Númerodeseriedelmotor, Marca, Año, Precio,Capacidaddecarga,ejes, rodadas){
        super(Númerodeseriedelmotor, Marca, Año, Precio);
        this._capacidaddecarga = Capacidaddecarga
        this._ejes = ejes
        this._rodadas = rodadas
    }
  
}
let objeto1=new Autos ('B10S0 S11020KC2', 'BMW', 2022, 149900000)
console.log(objeto1)
let objeto2=new Auto_Compacto ('F15AEH','Honda',2004,300000000,4)
console.log (objeto2)
let objeto3=new Auto_De_Lujo('550 kW o 750 CV','Mercedes-Maybach 6 Cabriolet',2021,1268718380,2)
console.log(objeto3)
let objeto4=new Vagoneta('Ecotec 3 Version 8 flexFuel','Chevrolet Suburban',2020,175000000,8)
console.log(objeto4)
let objeto5=new Camioneta ('6.7L version8','Ford F-250 Super Chief',2006,134000000,4,141.6,(`6.000km`))
console.log (objeto5)