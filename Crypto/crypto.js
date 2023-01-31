import crypto from 'crypto'

const secret = 'SECRET';
const hash = crypto.createHmac('sha256', secret)
                   .update('Santhosh')
                   .digest('base64url');
console.log(hash);

console.log(crypto.createDecipheriv('sha256',secret,hash));
