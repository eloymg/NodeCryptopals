var functions = require('./functions.js')
fs = require('fs')


fs.readFile('7.txt', 'utf8', function(err, data) {

    data = new Buffer(data, 'base64');
    key = new Buffer('YELLOW SUBMARINE','ascii');
    console.log(functions.aes128ecb_decrypt(data,key).toString('ascii'));

});