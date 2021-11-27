const jwt = require('jsonwebtoken');

const config = {
    secret: 'a3b',
    key: 'a5b',
    algorithm: 'HS256'
}

const header = {
    kid: config.key,
}

const token = jwt.sign({},config.secret,{algorithm:config.algorithm,header,expiresIn: '60m'})

console.log(token)
