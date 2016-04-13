var crypto = require('crypto')
fs = require('fs')
var decipher = crypto.createDecipheriv('aes-128-ecb','YELLOW SUBMARINE','');

fs.readFile('7.txt', 'utf8', function (err,data) {

	decipher.setAutoPadding(false);
	var decrypted = decipher.update(data, 'base64', 'utf8');
	decrypted += decipher.final();
	console.log(decrypted);

});




