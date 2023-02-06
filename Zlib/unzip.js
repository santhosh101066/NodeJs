import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import {deflate,unzip, createGunzip} from 'zlib'

const input="Happy to see you"

deflate(input,(err,buffer)=>{
    if(err){
        console.log(err);
        return
    }
  
    console.log(buffer.toString('base64'));
})
const buffer = Buffer.from('eJzzSCwoqFQoyVcoTk1VqMwvBQAxRAXg','base64')
unzip(buffer,(err,result)=>{
    if(err){
        console.table(err);
        return
    }
    console.log(result.toString());
})

const gunzip= createGunzip()
const zip= createReadStream('test.txt.gz')
const extract= createWriteStream('testex.txt')

pipeline(zip,gunzip,extract,(err)=>{
    err&&console.log(err);
    console.log('ran');
})