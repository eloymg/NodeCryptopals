var functions = require('./functions')

str1 = new Buffer("aaaaaaaaaaaaaaRo","ascii");
str2 = new Buffer("aaaaaaaaaaaaaaab","ascii");
str3 = new Buffer("aaaaaaaaaaaaaaac","ascii");
console.log(functions.byte_at_time(str1).toString('hex'));
console.log(functions.byte_at_time(str2).toString('hex'));
console.log(functions.byte_at_time(str3).toString('hex'));