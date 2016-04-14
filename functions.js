var crypto = require('crypto')
this.hammingdistance = function(str1,str2){
	res = this.xor(str1,str2);
	count = 0;
	for (i=0;i<res.length;i++){
		//console.log(res[i]);
		count += parseInt(res[i]).toString(2).match(/1/g).length
	}
	return count
};
this.xor = function(var1,var2){
				var st=[];
				for (i=0;i<var1.length;i++){
					st.push(var1[i]^var2[i]);
				}
				st = new Buffer(st);
				return st;
			};
this.xorkey = function (str,xvar){
	var st=[];
	var w = 0;
	for (i=0;i<str.length;i++){
	st.push(str[i]^xvar[w]);
		if(w>=xvar.length-1){w=0}else{w=w+1}	
	}
	st = new Buffer(st);
	return st;
};

this.freq = function (str){
	var freq = [8.167,1.492,2.782,4.253,12.702,2.228,2.015,6.094,6.966,0.153,0.772,4.025,2.406,6.749,7.507,1.929,0.095,5.987,6.327,9.056,2.758,0.978,2.360,0.150,1.974,0.074]
	var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	str = str.toString('ascii');
	freqval = 0;
	for (w in letters){
		var re = new RegExp(letters[w],'gi');
		if(str.match(re) !=null){
			freqval = freqval+Math.abs(str.match(re).length-freq[w]*(str.length/100));
		}else{
			freqval = freqval+Math.abs(15)
		}
	}
	return freqval
}
this.freqanalizer = function (str){
	var varfreq2 = 1000;
	for (j=0;j<255;j++){
	 	xvar = new Buffer([j]);
		varfreq1 = this.freq(this.xorkey(str,xvar));
		if(varfreq1<varfreq2){
			varfreq2=varfreq1;
			char=xvar.toString('hex');
			strres=this.xorkey(str, xvar).toString('ascii');
		}
	}
	return [strres,char,varfreq2]
}

this.aes128ecb_decrypt = function (data,key){
		var decipher = crypto.createDecipheriv('aes-128-ecb',key,'');
		decipher.setAutoPadding(false);
		var decrypted = decipher.update(data, 'base64', 'hex');
		decrypted += decipher.final('hex');
		return new Buffer(decrypted,'hex');
}
this.aes128ecb_encrypt = function (data,key){
		var cipher = crypto.createCipheriv('aes-128-ecb',key,'');
		var crypted = cipher.update(data, 'base64', 'base64');
		crypted += cipher.final('base64');
		return new Buffer(crypted,'base64');
		
}
