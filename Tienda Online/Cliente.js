const Usuario=requerir('./Usuario')

class Cliente extends Usuario{
    constructor(TipoDoc,Clave,NumTarjeta,ClaveTarjeta,Direccion,Correo,NumTelefono){
    super(TipoDoc,Clave)   
        this._NumTarjeta=NumTarjeta
        this._ClaveTarjeta=ClaveTarjeta
        this._Direccion=Direccion
        this._Correo=Correo
        this._NumTelefono=NumTelefono
    }
}