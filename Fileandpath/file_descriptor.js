import fs from 'fs'
import inquirer from 'inquirer';
import path from 'path';
import dotenv from 'dotenv'

// fs.open('data_sync.txt','r+',(err,fd)=>{
//     console.log(fd);
// })
// fs.readFile('data_sync.txt',(err,data)=>{
//     console.log(data.toString().length);
// })

// const stream=fs.createWriteStream('try.txt',{flags:'a'})

// inquirer.prompt({message:"Write your notes\n" , type:'input',name:'Notes'}).then((ans)=>{
//     stream.write(ans.Notes+"\n")
// })

// console.log(fs.existsSync('node_modules'));
dotenv.config()
fs.existsSync('test') || fs.mkdirSync('test')
fs.readdirSync('node_modules').map((val=>{
    console.log(val);
})) 
console.log(process.env.TEST);