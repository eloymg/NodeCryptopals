var crypto = require('crypto')
fs = require('fs')

function aesdecrypt(data,key){
		var decipher = crypto.createDecipheriv('aes-128-ecb',key,'');
		decipher.setAutoPadding(false);
		var decrypted = decipher.update(data, 'base64', 'utf8');
		decrypted += decipher.final();
		return decrypted;
}

fs.readFile('7.txt', 'utf8', function (err,data) {

		console.log(aesdecrypt(data,'YELLOW SUBMARINE'));

	});

