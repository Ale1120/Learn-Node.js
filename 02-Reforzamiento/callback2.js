let empleados = [{
  id: 1,
  nombre: "Alejandro"
},{
  id: 2,
  nombre: "Anthony"
},{
  id: 3,
  nombre: "Cesar"
}];

let salarios = [{
  id: 1,
  salario: 1000
},{
  id: 2,
  salario: 2000
}];


let getSalario = (empleado, callback) => {

  let salarioDB = salarios.find( salario => salario.id == empleado.id);

  if( !salarioDB) {
    callback(` No se encontro un salario para el empleado ${ empleado.nombre }`);
  } else {
    callback(null,{
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    });
  }

}


let getEmpleado = (id, calllback ) => {
  let empleadoDB = empleados.find( empleado => empleado.id == id)

  if ( !empleadoDB ){
    calllback(` No existe un empleado con el ID ${ id}`);
  } else {
      calllback(null, empleadoDB);
  }
}

getEmpleado(3, (err, empleado) => {

  if (err){
    return console.log(err);
  }

  getSalario(empleado, (err, resp) => {

    if (err){
      return console.log(err);
    }
    console.log(`El Salario de ${ resp.nombre} es de ${ resp.salario }$`);

  });


});
