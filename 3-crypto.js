var functions = require('./functions.js')

str = new Buffer('1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736','hex');

res = functions.freqanalizer(str);

console.log(res[0]+'|char:'+res[1])
