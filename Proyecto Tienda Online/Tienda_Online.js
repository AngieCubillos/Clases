//Tienda Online De Libros 
class Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña) {
        this._Nombre = Nombre
        this._TipoDocumento = TipoDocumento
        this._NroDocumento = NroDocumento
        this._Contraseña = Contraseña
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
}

class Cliente extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefono_C = Telefono_C
        this._Correo_C = Correo_C
        this._Direccion = Direccion
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
    set Telefono_C(Telefono_C){
        this._Telefono_C=Telefono_C
    }
    set Correo_C(Correo_C){
        this._Correo_C=Correo_C
    }
    set Direccion(Direccion){
        this._Direccion=Direccion
    }
}

class Administrador extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefonos, Correos, DireccionEmpresa) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefonos = Telefonos
        this._Correos = Correos
        this._DireccionEmpresa = DireccionEmpresa
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
    set Telefonos(Telefonos){
        this._Telefonos=Telefonos
    }
    set Correos(Correos){
        this._Correos=Correos
    }
    set Direccion(DireccionEmpresa){
        this._DireccionEmpresa=DireccionEmpresa
    }
}

class Vendedor extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_V, Correo_V) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefono = Telefono_V
        this._Correo = Correo_V
    }
    get Nombre(){
        return this._Nombre
    }
    get TipoDocumento(){
        return this._TipoDocumento
    }
    get NroDocumento(){
        return this._NroDocumento
    }
    get Contraseña(){
        return this._Contraseña
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
    set Telefono_V(Telefono_V){
        this._Telefono_V=Telefono_V
    }
    set Correo_V(Correo_V){
        this._Correo_V=Correo_V
    }
    set Direccion(Direccion){
        this._Direccion=Direccion
    }
}

class Producto extends Cliente{
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion ){
        super (Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion)
    }
}
