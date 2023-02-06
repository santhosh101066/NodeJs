import {createGzip} from 'zlib'
import { createReadStream,createWriteStream } from 'fs'
import {pipeline}from 'stream'

const gzip=createGzip()
const file=createReadStream('test.txt')
const zip=createWriteStream('test.txt.gz')

pipeline(file,gzip,zip,(err)=>{
    err&&console.log('error: '+err);
})
