// Async - Await

import  {getCompanyById,getHeroeById} from "./bases/Exportacion";


const getHeroeByIdAsyc = async (id) => {
  
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

const getHeroeByIdAsyc2 = async (id) => {
  try {
    const heroe = await getHeroeByIdAsyc(id);
      console.log(heroe);
    } catch (error){
        console.log(error);
    }
}

getHeroeByIdAsyc2(2);
