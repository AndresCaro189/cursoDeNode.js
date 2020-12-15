/** Funciones Callback
Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.
La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo */


function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios,'+ nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
//callback
hola('Carlos', function (nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});

// hola('Carlos', function () {});
// adios('Carlos', function () {});