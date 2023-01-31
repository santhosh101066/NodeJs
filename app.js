import http from 'http'
import dotenv from 'dotenv'
import fs, { createWriteStream } from 'fs'

dotenv.config()
const PORT=process.env.PORTS || 8000



const app=http.createServer((req,res)=>{
    const file=createWriteStream('img.png')
    // res.statusCode=400
    // res.statusMessage="Page not found"
    
    console.log(req.method);
    // res.write('<h1>Hello world</h1>')
    req.on("data",(chunk)=>{
        // res.write(String.fromCharCode(...chunk))
        file.write(chunk)
        res.write(chunk)
        // res.write('e')
        console.log(req.socket);
    })
    req.on("end",()=>{
        res.write(fs.readFileSync('img.png'))
        res.end()
    })
    
    
})

app.listen(PORT)
console.log("Listening on http://localhost:"+PORT);