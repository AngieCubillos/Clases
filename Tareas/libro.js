//Capitulo3
//MATRICES Y SUS PROPIEDADES
//Creando arreglos 
arr1 = new array ("purple","green","yellow");
console.log (arr1)

arr2 = ["black","orange","pink"];
console.log (arr2)

arr3 = new array (10);
console.log (arr3)

arr4 = [10];
console.log (arr4)
//Acceder a elemtos 
car = ["Toyota", "Renault", "volkswagen"];
console.log (car[0]);
console.log (car [-1]);
//Sobrescribir elementos 
car[0] = "Tesla";
console.log (cars[0])
car = ["Toyota", "Renault", "volkswagen"];
console.log (cars)
car[1] = "Kia";
console.log (car[1])
car[-1] = "Fiat";
console.loog (car[-1])
//Propiedad de longitud incorporada
colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);
//METODOS DE MATRIZ
//Agregar y remplazar elementos
//push 
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);
//splice  
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
 
arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);
 
arrOfShapes.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes); 
//concat  
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
 
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
//ELIMINACION DE ELEMENTOS
//pop  
arr8.pop();
//shit 
arr8.shift();
//splice 
arr8.splice(1, 3);
//delete 
delete arr8[0];
//ENCONTRAR ELEMENTOS 
//find  
arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);
//indexof
arr8 = [ 2, 6, 7, 8 ];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
 
arr8 = [ 2, 6, 7, 8 ];
let findIndex3 = arr8.indexOf(6, 2);
//lastIndexOf()
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
//CLASIFICACION 
//sort 
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log (names)
 
let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log (ages)
//MARCHA ATRAS 
names.reverse();