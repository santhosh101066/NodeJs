import path from 'path'

const a="/User/aspire/test.txt"

console.log(path.dirname(a));
console.log(path.basename(a))// filename
console.log(path.extname(a));// extension name
console.log(path.basename(a,path.extname(a)));
console.log(path.resolve('test.js'));
console.log(path.normalize('/user/aspire/..//test.txt'))