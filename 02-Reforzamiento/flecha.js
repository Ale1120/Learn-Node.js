// function sumar(a, b) {
//
//   return a + b;
//
// }

let sumar = (a,b) => a + b;

console.log(sumar(10,20));


// ejeccio 1
// let saludar = () => 'hola mundo';

let saludar = nombre => `Hola ${ nombre }`;

console.log(saludar("Alejandro"));


let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  getNombre() {
    return ` ${ this.nombre} ${ this.apellido } - poder: ${ this.poder} `
  }
}

console.log(deadpool.getNombre());
