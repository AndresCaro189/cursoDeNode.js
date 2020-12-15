/**Async/await
Para evitar que todo se vea asíncrono, y que la sintáxis sea más legible las operaciones secuenciales como hacer un archivo
que se procese, subirlo para tener una URL y de ahí mandarla a una base de datos.
Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. No estará
bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop
 */

async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            //resolve(nombre);
            resolve('Hay un error');
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Empezamos el proceso');
main();
console.log('Va a ser la segunda instrucción')