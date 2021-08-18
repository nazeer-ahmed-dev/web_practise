
/*function SayHello(name)  // globle object
{
    console.log("Hello"+name)
}
SayHello("nazeer") // node app.js (on cmd)
console.log(module) // JSON object
*/
// var lgr = require('./logger.js'); //importing logger module
const lgr = require('./logger.js');
//lgr = 1 if we modify logger value then its get error then logger datatype should be cosntant
lgr.log("message")