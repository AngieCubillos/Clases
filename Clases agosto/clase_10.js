const persona = {
    nombre:"Angie",
    apellido: "Suarez",
    edad:29,
    getEdad: function (){
      return this.edad;
    }
  }
  
  console.log(persona.getEdad() );