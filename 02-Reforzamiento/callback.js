// Calllback

setTimeout( () => {
  console.log("Hola mundo")
}, 3000);

let getUsuarioById = (id, calllback ) => {
  let usuario = {
    nombre: 'Alejandro',
    id  // id: id
  }
  if (id === 20){
    calllback(`El usuario con id ${id}, no existe en la DB`);
  } else {
      calllback(null, usuario);
  }
}



getUsuarioById(2, (err, usuario)=> {
  if (err ){
    return console.log(err);
  }
  console.log("Usuario de base de datos", usuario)
});
