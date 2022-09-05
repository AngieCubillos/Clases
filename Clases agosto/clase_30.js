//Tienda Online De Libros 
class Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña) {
        this._Nombre = Nombre
        this._TipoDocumento = TipoDocumento
        this._NroDocumento = NroDocumento
        this._Contraseña = Contraseña
    }
}

class Cliente extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_C, Correo_C, Direccion) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefono_C = Telefono_C
        this._Correo_C = Correo_C
        this._Direccion = Direccion
    }
}

class Administrador extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefonos, Correos, DireccionEmpresa) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefonos = Telefonos
        this._Correos = Correos
        this._DireccionEmpresa = DireccionEmpresa
    }
}

class Vendedor extends Usuario {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono_V, Correo_V) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña)
        this._Telefono = Telefono_V
        this._Correo = Correo_V
    }
}

class Carrito extends Cliente {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono, Correo, Direccion, Productos, Precios, CantidadProducto, TotalPagar) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono, Correo, Direccion)
        this._Productos = Productos
        this._Precios = Precios
        this._CantidadProducto = CantidadProducto
        this._TotalPagar = TotalPagar
    }
}

class Producto extends Carrito {
    constructor(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono, Correo, Direccion, Productos, Precios, CantidadProducto, TotalPagar, NombreProducto, CategoriaProducto, Autor, ISBN, Paginas, FechaPublicación, Formato) {
        super(Nombre, TipoDocumento, NroDocumento, Contraseña, Telefono, Correo, Direccion, Productos, Precios, CantidadProducto, TotalPagar)
        this._NombreProducto = NombreProducto
        this._CategoriaProducto = CategoriaProducto
        this._Autor = Autor
        this._ISBN = ISBN
        this._Paginas = Paginas
        this._FechaPublicacion = FechaPublicación
        this._Formato = Formato
    }
}