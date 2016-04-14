var crypto = require('crypto')
var functions = require('./functions')
fs = require('fs')

function aesdecrypt(data,key){
		var decipher = crypto.createDecipheriv('aes-128-ecb',key,'');
		decipher.setAutoPadding(false);
		var decrypted = decipher.update(data, 'binary', 'hex');
		decrypted += decipher.final('hex');
		return decrypted;
}
function aesencrypt(data,key){
		var cipher = crypto.createCipheriv('aes-128-ecb',key,'');
		var crypted = cipher.update(data, 'base64', 'base64');
		crypted += cipher.final('base64');
		return crypted;
}
function pkcspaddingarr(str,bytes){

		var arr = [];
		str = str.toString('hex')
		
		for(i=0;i<str.length/(bytes*2);i++){
		
			var buf = new Buffer(str.substring(i*bytes*2, i*bytes*2+bytes*2),'hex')
			arr.push(buf)
		}
		lastlen = arr[arr.length-1].length
		
		if(bytes-lastlen<=16){zero='0';}else{zero='';}
		
		padding = zero+(bytes-lastlen).toString(16);
		arr[arr.length-1]=new Buffer(arr[arr.length-1].toString('hex')+padding.repeat(bytes-lastlen),'hex');
		return arr;
}
function xores(var1,var2){
	var st='';
	for (i=0;i<var1.length;i++){
	st = st+(String.fromCharCode(var1[i]^var2[i]));
	}
	return st;
}
function aes128CBCdecrypt(data,key,iv){
		block = Buffer(iv,'hex')
		arr = pkcspaddingarr(data,16)
		res = [];
		for (j=0;j<arr.length;j++){
			dec =functions.aes128ecb_decrypt(arr[j],key);
			res.push(functions.xor(dec,block));
			block = arr[j];
		}
		return Buffer.concat(res)
}

function aes128CBCencrypt(data,key,iv){
		block = Buffer(iv,'hex')
		arr = pkcspaddingarr(data,16)
		res = '';
		for (j=0;j<arr.length;j++){
			prexor = new Buffer(xores(arr[j],block),'ascii');
			enc = new Buffer(aesencrypt(prexor,key).toString('base64'),'hex');
			res += enc
			block = new Buffer(xores(arr[j],block),'ascii');
		}
		return res
}

    


fs.readFile('10.txt', 'utf8', function (err,data) {
		data = new Buffer(data,'base64');
		data2 = new Buffer('hola que tal','ascii')
		console.log(aes128CBCdecrypt(data,'YELLOW SUBMARINE','00000000000000000000000000000000').toString('ascii'));
		//console.log(aes128CBCencrypt(data2,'YELLOW SUBMARINE','00000000000000000000000000000000'));
	});