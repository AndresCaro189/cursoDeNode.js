/**
Los Error First Callbacks se utilizan para pasar primero el error y los datos posteriormente. Entonces, puedes verificar el primer
argumento, es decir, el objeto de error para ver si algo salió mal y puedes manejarlo. En caso de que no haya ningún error, puedes
utilizar los argumentos posteriores y seguir adelante.
 */
function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}


asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err; // NO VA A FUNCIONAR
    }

    console.log('todo ha ido bien, mi data es', dato);
})