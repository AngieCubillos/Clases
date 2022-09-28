class Carrito{
    constructor(Cliente){

        this.Producto=[]
    }
    agregarProducto (Producto,Inventario){
        if(Inventario._Cantidad>0){
            this.Producto.push(Producto)
            inventario._Cantidad+=-1
        }else{
            console.log('No esta el producto')
        }
    }
    get Lista(){
        Console.log(this.Productos)
    }
    QuitarProducto(Producto,Inventario){
        this.producto=this.producto.filter((i)=>i!==Producto)
        inventario._Cantidad+=1
    }
}
module.exports=Carrito