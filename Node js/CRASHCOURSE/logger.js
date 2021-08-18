console.log(__filename)
console.log(__dirname)
var url = 'http://mylogger.io/log'
function log(messgae)
{
    //sending http request
    console.log(messgae)
}
module.exports.log=log        // exporting module

 
/*(function(exports,require,module,__filename,__dirname){ // module wrapper function
    var url = 'http://mylogger.io/log'
function log(messgae)
{
    //sending http request
    console.log(messgae)
}
module.exports.log=log        // exporting module
module.exports = log;
exports.log = log
}
)*/
const EventEmitter = require('events')
//const emiiter = new EventEmitter()

class Logger extends EventEmitter
{
    log(message)
    {
        console.log(message)
    
    this.emit('messageLogged',{id:1,url:'http://'})
}}
module.exports = Logger