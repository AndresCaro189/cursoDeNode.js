/*Este módulo de node es poderosísimo, te da buen control sobre la consola. Aquí les dejo otros dos métodos que no se mencionaron en la
clase y que les puede servir:

console.clear(): limpiará la consola, aunque depende mucho del sistema operativo su comportamiento. Por ejemplo, en linux es equivalente
al comando clear, mientras que en Windows borrará solo la salida en la vista de la terminal actual.
console.timer(‘timer’): comienza un temporizador que puedes usar para calcular la duración de cualquier operación. El mismo parámetros
que le pasamos se pasara a console.timerEnd() para detener al contador. */

// Console

// console.log() recibe cualquier tipo y lo muestra en el consola.
/*
console.log('Algo')
 */
// console.info()  es equivalente a log pero es usado para informar.
/*
console.info('Algo')
 */
// console.warn() es equivalente a log pero es usado para warning.
/*
console.warn('Algo')
 */
// console.error() es equivalente a log pero es usado para errores.
/*
console.error('Algo')
 */
// console.table() muestra una tabla a partir de un objeto.

// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
/*
var tabla = [
    {
        a:1,
        b:'z'
    },
    {
        a:2,
        b: 'Otra'
    }
]
console.table(tabla)
*/
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

// console.group(); permite agrupar errores mediante identación
// console.groupEnd(); finaliza la agrupación.

// EJEMPLO 1
/*
console.group('saludo');
console.log('Hola');
console.log('blablabla');
console.log('blablabla');
console.groupEnd('saludo');
console.group('despedida');
console.log('Se cuida');
console.log('adios');
console.group();
console.log('Carlos');
console.groupEnd();
console.groupEnd();
*/
// EJEMPLO 2
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');