/**Sharp puede convertir imágenes grandes en imágenes JPEG, PNG más pequeñas y compatibles con la web de diferentes dimensiones. */

const sharp = require('sharp');

sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');