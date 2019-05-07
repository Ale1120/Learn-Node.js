let nombre = "Deadpool";
let nombreReal = "Wade Winston";

console.log(nombre + ' ' + nombreReal);
console.log(`${ nombre } ${ nombreReal }`);


function getNombre(){
  return `${ nombre } ${ nombreReal }`;
}

console.log(`El nombre de: ${ getNombre() } es de una funcion`);
