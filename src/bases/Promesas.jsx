// ! Promesas en jvs
// Las promesas son asicronas por definicion 

import  { getCompanyById,getHeroeById } from "./bases/Exportacion";


const getHeroeByIdAsyc = (id) => {

return new Promise( ( resolve, reject )  =>  {
  setTimeout( () => {
    //console.log('Han pasado 2 segundos');
    const heroes = getHeroeById(id);
    
    
    if (heroes) {
      //Cambia estado fulfill
      resolve(heroes);
    }
    else{
      reject('No se encuentra el heroe ')
    }
  }, 2000 );
}); 
}

// En caso que la respuesta es existosa
getHeroeByIdAsyc(2)
.then(heroes => {console.log(heroes)})
.catch( error => console.log(error))