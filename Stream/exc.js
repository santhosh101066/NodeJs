import {exec}from 'node:child_process'
import path from 'node:path';

const runner = exec('node '+ path.resolve()+'/logs.js',(...logger)=>{
        console.log(logger);
      });