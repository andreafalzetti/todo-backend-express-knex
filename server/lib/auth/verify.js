const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const publicKey = fs.readFileSync(
  path.join(__dirname, '../../config/public_key.pem'),
  'utf8'
);

function verify(token) {
    if (!token) {
        throw new Error('No token provided');
    }
    
    const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
    
    return decoded;
}

module.exports = verify;
