var functions = require('./functions.js')

str = new Buffer('Burning 'em, if you ain't quick and nimble I go crazy when I hear a cymbal','ascii');
key = new Buffer('ICE','ascii');

console.log(functions.xorkey(str,key).toString('hex'));
