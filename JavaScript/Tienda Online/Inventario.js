class Inventario{
    constructor(Producto,Cantidad){
        this._Isbn=Producto._Isbn
        this._Titulo=Producto._Titulo
        this._Cantidad=Cantidad
    }
    AñadirProducto(Cantidad){
        this._Cantidad+=Cantidad
    }
    QuitarProducto(Cantidad){
        this._Cantidad+=-Cantidad
    }
}
module.exports=Inventario