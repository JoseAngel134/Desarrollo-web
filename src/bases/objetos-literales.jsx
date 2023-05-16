// Objetos literales 

const persona = {
  nombre: 'Jose',
  apellido : 'Zapotecas',
  edad : 21,
  direccion: {
    calle : '16 de septiembre',
    no : 9,
    colonia: "Santa Barbara", 
    municipio: "Cholula"    
  },
};

console.log(persona.apellido);
console.log(persona.direccion.colonia)

/*Operador de propagacion o spread */

const persona2 = {...persona};

persona2.edad=45;
console.log(persona2.edad);