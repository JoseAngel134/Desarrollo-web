// ! funciones en JS

function mensaje(cadena) {
  return  cadena;
}

//console.log(mensaje('Holi'));

//mensaje = 50;

console.log(mensaje);

const mensaje1 = function(cadena){
  return cadena;
};

//mensaje1 = 100;

// function flecha

const mensaje2 = (cadena) => {
  return cadena;
};

console.log(mensaje,mensaje1, mensaje2)

//funcion que retorna un objeto 
const mensaje3 =() => ({
  id : 1 ,
  nick : 'admin',   
});

console.log(mensaje3());
