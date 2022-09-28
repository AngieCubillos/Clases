const Cliente = require('./Cliente')
const Persona = require('./Usuario')
const Producto = require('./Producto')
const Inventario = require('./Inventario')
const Carrito = require('./Carrito')
const Factura = require('./factura')

Cliente1=New Usuario(1015999438,'MarioMendoza')
Cliente2=New Usuario(100219356,'CarolinaAndujar')
Cliente3=New Usuario(7278780,'FlorSalvador')
console.log(Cliente1,Cliente2,cliente3)

libro1=New Producto('Novela',55.000,9789584293138,'Mario Mendoza',400,2019,'Fisico','Akelarre')
Libro2=New Producto('Novel Grafica',89.000,9789584273543,'Mario Mendoza',136,2018,'Fisico','Satanás')
Libro3=New Producto('Alternativo',55.000,9789584293411,'Mario Mendoza',224,2010,'Fisico','La Locura De Nuestro Tiempo')
console.log(Libro1,libro2,libro3)

Inventario1=New Inventario('Libro1',9)
Inventario2=New Inventario('Libro2',6)
Inventario3=New Inventario('Libro3',3)
console.log(Inventario1,Inventario2,Inventario3)

Console.log('*****Funciones*****')