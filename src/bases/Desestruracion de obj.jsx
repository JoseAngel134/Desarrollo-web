// Desestruracion 

const vehiculo = {
  anhio : 2023,
  id: 123,
  marca: 'Nissan',
  modelo : 'Sentra',
};

const modelo = 'March';

console.log(vehiculo.marca);

const { modelo:modelo2 , id, anhio } = vehiculo;
console.log(modelo, id, anhio, modelo2 );

// estructurada y desustructurada 

const getModelo = ( {modelo} ) => {
  //return vehiculo.modelo;
  //const{ modelo } = vehiculo;
  return modelo;
}

console.log(getModelo(vehiculo));

const user = {
  nickname: 'Admin',
  name: 'Angel',
  pass: 123354
}

const _useContext = ( { nickname, name, pass='999' } ) => {
  return{
    nombre : name,
    usuario : nickname,
    contraseña: pass,
    llaves :{
      publica : '23%#TERG!"#$"',
      privada : '1233456',
    } 
  }
};

console.log(_useContext(user));

const resul = _useContext(user);

const {llaves}=resul;
const {publica, privada}= llaves;

console.log(llaves);





