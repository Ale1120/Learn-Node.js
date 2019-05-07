// objeto

let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  getNombre: function() {
    return ` ${ this.nombre} ${ this.apellido } - poder: ${ this.poder} `
  }
}

console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apeliido = deadpool.apeliido;
// let poder = deadpool.poder;


let { nombre: primerNombre, apellido, poder } = deadpool

console.log(primerNombre, apellido, poder)
