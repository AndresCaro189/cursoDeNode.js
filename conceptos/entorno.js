//Variables de entorno

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.MI_WEB || 'no tengo web';

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);


//En Consola (NOMBRE=Carlos node conceptos/entorno.js)
//            NOMBRE=Carlos MI_WEB=loquesea.com node conceptos/entorno.js
//Respuesta   (Hola Carlos
//            Mi web es loquesea.com)

//nodemon conceptos/entorno.js
/**Nodemon (Desarrollo): Es un gestor que nos ayuda a detectar los cambios, compilarlo y ejecutarlos.
npm install -g nodemon */
console.log('Andres');
//save
console.log('Carro');

/**PM2 (Producción): Es parecida a nodemon simplemente mas avanzada y mas compleja. No se debe utilizar en desarrollo 
 * por que dará más problemas que soluciones. Nos ayudara a ver los datos de nuestra aplicación en producción, como el uso del 
 * CPU, memoria, cuantas veces se ha reiniciado.
npm install -g pm2 */
