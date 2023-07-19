// function sayHello(name) {
//   console.log("hello " + name);
// }

// sayHello("Biruk");

// //global objects

// let message = "";

// //console.log(global.message);
// const log = require("./logger");
// const path = require("node:path");

// let pathObj = path.parse(__filename);

// console.log(pathObj);

// log("message");


// const os = require('node:os');

// let totalMemo = os.totalmem();
// let freeMemo = os.freemem();

// console.log('Total memory: ' + totalMemo);
// console.log(`Free memory : ${freeMemo}.`);


// const fs = require('node:fs');

// const files = fs.readdirSync('./')

// console.log(files);

// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);

// })


const EventEmitter = require('node:events');

// emitter.emit('messageLogged',{id:1, url:'http://'}); //  raise event
const Logger = require('./logger');
const logger = new Logger();
 

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log("Listener called",arg);
})

logger.log('message');

 
 