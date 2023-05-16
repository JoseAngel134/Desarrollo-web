// Desustruracion de arreglos

const personajes = ['Mike Wazosky', 'Ultra Man', 'Goku', 
'Tondercats'];

console.log(personajes [0]);

//destructurar 

const [ , p2  ] = personajes;

console.log(p2);

const arreglo = () => {
  return ['ABCDE', 123456];

}

const [letras, numeros ]= arreglo();
console.log(letras, numeros);

const _useState = (valor) => {
  return [valor, () =>  'Esta es una funcion' ]
}

console.log(_useState('Jose'));

/* Ejercicio para medio punto desestructura el arreglo que proviene  de invocar a la 
 fucion _iseState()
 1.EL VALOR DESESTRUCTURADO COMO "NOMBRE"
 2.LA FUNCION DESESTRUTURALA COMO "getMensaje"*/

 const [nombre, getMensaje] = _useState('Jose');

 console.log(nombre, getMensaje());