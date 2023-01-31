// const ytdl = require("ytdl-core");
// const fs=require('fs')

import chalk from 'chalk'
import inquirer from 'inquirer';
import eventEmitterFun from './event_emmiter.js';

// let a=0
// function Dummy(name){
//     console.log("event "+a+"  "+name);
//     a++
// }

// process.nextTick(()=>Dummy("next tick"))
// setTimeout(()=>Dummy('settime out 0'),0)
// setImmediate(()=>Dummy('immediate'))
// Dummy("function")

// console.log("Hello => number 1");

// setTimeout(() => {
//   console.log("The timeout running last => number 4");
// }, 0);

// setImmediate(() => {
//   console.log("Running before the timeout => number 3");
// });

// process.nextTick(() => {
//   console.log("Running at next tick => number 2");
// });

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//   });



// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });

// console.log(chalk.bgBlue("Aspire"));


eventEmitterFun()


