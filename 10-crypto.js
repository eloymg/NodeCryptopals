var functions = require('./functions')
fs = require('fs')

fs.readFile('10.txt', 'utf8', function (err,data) {
		iv = new Buffer('00000000000000000000000000000000','hex');
		key = new Buffer('YELLOW SUBMARINE','ascii');
		data = new Buffer(data,'base64');
		data3 = new Buffer(functions.aes128cbc_decrypt(data,key,iv).toString('ascii'),"ascii");
		console.log(functions.aes128cbc_encrypt(data3,key,iv).toString("base64"));
		console.log(functions.aes128cbc_decrypt(functions.aes128cbc_encrypt(data3,key,iv),key,iv).toString('ascii'));
	});