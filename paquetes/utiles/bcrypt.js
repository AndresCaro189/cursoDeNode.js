/**La función de cifrado de bcrypt nos permite construir una plataforma de seguridad utilizando contraseñas encriptadas con Salt. */
const bcrypt = require('bcrypt'); //paquete importado

const password = '1234Segura!';
// La consola nos entregaria una contraseña distinta en cada oportunidad.
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash); 
    // Para evaluar si una contraseña concuerda con un hash
    bcrypt.compare('password', hash, function(err, res) {
        // console.log(err)
        console.log(res)
    })
});
// Nos va a responder **true** *(en el result)* o **false** *(en el error)* dependiendo si la contraseña puede generar el hash
