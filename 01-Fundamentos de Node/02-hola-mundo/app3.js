console.log('Inicio del Programa')

// callback
setTime( function() {
    console.log('Primer Timeout')
}, 3000 );


setTime( function() {
    console.log('Segundo Timeout')
}, 0 );


setTime( function() {
    console.log('Tercer Timeout')
}, 0 );

console.log('Fin del programa');
