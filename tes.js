const resizer = require('./index.js')

resizer.resize('source', 'destination', 1000, 300)
    .then(info => {
        console.log(info);
    })
    .catch(err => {
        console.error(err);
    });    
    