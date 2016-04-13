str = new Buffer("1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736","hex");

function xores(str,xvar){
	var st="";
	for (i=0;i<34;i++){
	st = st+String.fromCharCode((str[i]^xvar[0]).toString());
	}
	return st;
}

function freq(str){
	var freq = [8.167,1.492,2.782,4.253,12.702,2.228,2.015,6.094,6.966,0.153,0.772,4.025,2.406,6.749,7.507,1.929,0.095,5.987,6.327,9.056,2.758,0.978,2.360,0.150,1.974,0.074]
	var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	freqval = 0;
	for (w in letters){
		var re = new RegExp(letters[w],"gi");
		if(str.match(re) !=null){
		freqval = freqval+Math.abs(str.match(re).length-freq[w]*(str.length/100));
		}else{freqval = freqval+Math.abs(15)}
	}
	return freqval
}

var varfreq2 = 1000;
for (j=16;j<255;j++){
    if(j<16){zero="0";}else{zero="";}
 	xvar = new Buffer(j.toString(16),"hex");
	//console.log(xores(str,xvar)+" char:"+xvar.toString("hex"));
	//console.log(freq(xores(str,xvar)));
	varfreq1 = freq(xores(str,xvar));
	if(varfreq1<varfreq2){varfreq2=varfreq1;char=xvar.toString("hex");strres=xores(str, xvar);}
	
	}
console.log(strres+"|char:"+char)
