// console.log(__filename);
// console.log(__dirname);
const EventEmitter = require("node:events");

let url = "https://mylogger.io/log";

class Logger extends EventEmitter { 
    log(message) {
  //send an http request
  console.log(message);

  //Raise an event
  this.emit('messageLogged', { id: 1, url: 'http://' });
}
}


module.exports = Logger;

//module.exports.endPont = url;
