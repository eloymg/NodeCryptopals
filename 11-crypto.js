var functions = require('./functions.js')

data = new Buffer("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "ascii");

console.log(functions.encryption_oracle(functions.random_encryption(data)));
console.log(functions.encryption_oracle(functions.random_encryption(data)));
console.log(functions.encryption_oracle(functions.random_encryption(data)));
console.log(functions.encryption_oracle(functions.random_encryption(data)));
console.log(functions.encryption_oracle(functions.random_encryption(data)));
console.log(functions.encryption_oracle(functions.random_encryption(data)));
console.log(functions.encryption_oracle(functions.random_encryption(data)));
