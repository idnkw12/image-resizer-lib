const sharp = require('sharp');

function resize(input, output, width, height) {
  return new Promise((resolve, reject) => {
    sharp(input)
      .resize({ width, height, fit: 'fill' })
      .toFile(output, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
  });
}

module.exports = {
  resize
}