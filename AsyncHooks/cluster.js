import cluster  from 'cluster'
import os from 'os'
import http from 'http'
const  cpu=os.cpus().length
let counter=0
if(cluster.isPrimary){
    console.log(cpu);
   for (let index = 0; index < cpu; index++) {
    const a= cluster.fork()
    console.log('cluster started ',a.id);
  
   }
   cluster.on("exit",(worker)=>console.log(worker.id))
}
else{

  http.createServer((req, res) => {
    res.writeHead(200);
    console.log(Symbol(counter));
    res.end(`<h1>hello world</h1>
    `);
  }).listen(8000);
  console.log('Cluster Worker http://localhost:8000');
  counter++
}