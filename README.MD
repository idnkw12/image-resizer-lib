# image-resizer-lib

`image-resizer-lib` is a Node.js library for resizing images, built on top of the high-performance [sharp](https://sharp.pixelplumbing.com/) library.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install `image-resizer-lib`.

\`\`\`bash
npm install image-resizer-lib
\`\`\`

## Usage

\`\`\`javascript
const resizer = require('image-resizer-lib');

// Resize an image to 200px width, maintaining aspect ratio
resizer.resize('input.jpg', 'output.jpg', 200);
\`\`\`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)