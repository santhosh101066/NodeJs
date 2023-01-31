import {Blob} from 'buffer'
const buffer1=new Buffer.alloc(10)
buffer1[0]=12
console.log(buffer1);

const buffer2=new Buffer.from("Hello World",'utf-8');
console.log(buffer2.toString(),buffer1);


const blob=new Blob(["hiiii this is san","Happy life"])
blob.arrayBuffer().then((res)=>{
   console.log(res);
   blob.text().then(console.log)
})
