function getUsuarioSync(id) {

  const starPoint = new Date().getTime()
  while (new Date().getTime() - starPoint <= 3000) {
    // esperando ...
    // haciendo el fetch de base de datos ...

  }

  return {
    id,
    nombre: `Usuarios${ id }`
  };

}


function getUsuario(id, callback) {

  let usuario = {
    id,
    nombre: `Usuario${ id }`
  }

  // esperando ...
  // haciendo el fetch de base de datos ...
  setTimeout( () => callback(usuario, 3000));
}
