// Arreglos Javascript[]

//const arreglo = new Array(100);
const arreglo = [];

arreglo[1] = 25;
arreglo.push(100);


console,console.log(arreglo);
const arreglo2 = [...arreglo];
arreglo2.push(15);
console.log(arreglo2, arreglo)


/* Ejercicio defina un nuevo arreglo con el contenido 
 del arreglo uno mas dos elementos */

const arreglo3 = [...arreglo, 1 ,"Jose"];
console.log(arreglo3); 

const arreglo4 = arreglo.map(function (x) {
  return x*2;
});  

console.log(arreglo4);


