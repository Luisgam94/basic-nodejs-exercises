const bcrypt = require('bcrypt');

const pass = 'luis';

bcrypt.hash(pass,5,function (err, hash) {
    console.log(hash)
})
