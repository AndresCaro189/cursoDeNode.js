/*
    ** Stream**
    Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un
    video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no
    editarlos) ya que lo vemos al mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se
    descargue el video por completo para poder verlo.
*/

const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);