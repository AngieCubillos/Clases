class Producto{
    constructor( Categoria, Precio, Isbn, Autor, Paginas, FechaPublicación, Formato, Titulo) {
        this._Categoria = Categoria
        this._Precio = Precio
        this._Isbn = Isbn
        this._Autor = Autor
        this._Paginas = Paginas
        this._FechaPublicación = FechaPublicación
        this._Formato = Formato
        this._Titulo = Titulo
    }
}

module.exports=Producto;