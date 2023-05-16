// IMPORTACION DE RECURSOS

import companies, {heroes}  from '../data/heroes';

//console.log(heroes, companies);

const getHeroeById = (id) => {
  return heroes.find( heroe => heroe.id == id );

}

const getCompanyById = (id) =>{
  return companies.find(company => company.id == id);
}


 export {
  getHeroeById, 
  getCompanyById}