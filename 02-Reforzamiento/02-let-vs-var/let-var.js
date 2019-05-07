// puede ser cambiar el valor de la varible
var nombre = "Wolverine";

if (true){
  var nombre = "Mageneto"
}

console.log(nombre);

// no puede ser redefinida
let nombre1 = "Wolverine";
// solo de una forma nombre1 = "Fenix"
if (true){
  let nombre1 = "Mageneto"
}

console.log(nombre1);


for (var i = 0; i < =5; i++) {
  console.log('i: ${ i }');
}
console.log(i);
