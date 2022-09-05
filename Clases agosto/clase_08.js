let vector=[];
let tam=Math.round ((Math.random()*20-10)+10);
console.log(`Valor de variable tam ${tam}`);

for (let i = 0; i <tam ; i++){
  vector[i]=Math.round(Math.random()*100);
}
console.log(vector);
console.log(`Tamaño del vector:${vector.length}`);

for (let i = 0; i < vector.length; i++){
  if (vector[i]%2==0){
    console.log (`${vector[i]}Es par`)
  } else {
   		console.log (`${vector[i]}Es impar`) 
  }
}