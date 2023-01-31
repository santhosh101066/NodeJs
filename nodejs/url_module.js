
import querystring from 'querystring'


const url = new URL('https://63ac289ecf281dba8c351249.mockapi.io/user?as=happy&b=ji')

console.log(url.host,url.port,url.hostname,url.pathname,url.protocol);
console.log(url.search);
console.log(new URLSearchParams(url.search))
const decoded= querystring.parse(url.search)
console.log(decoded);
console.log(process.env.NODE_ENV);