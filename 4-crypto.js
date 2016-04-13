str = new Buffer("1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736","hex");

function xores(str,xvar){
	var st="";
	for (i=0;i<str.length;i++){
	st = st+String.fromCharCode((str[i]^xvar[0]).toString());
	}
	return st;
}

function freq(str){
	var freq = [8.167,1.492,2.782,4.253,12.702,2.228,2.015,6.094,6.966,0.153,0.772,4.025,2.406,6.749,7.507,1.929,0.095,5.987,6.327,9.056,2.758,0.978,2.360,0.150,1.974,0.074,7]
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "]
	freqval = 0;
	for (w in letters){
		var re = new RegExp(letters[w],"gi");
		if(str.match(re) !=null){
		freqval = freqval+Math.abs(str.match(re).length-freq[w]*(str.length/100));
		}else{freqval = freqval+Math.abs(40)}
	}
	return freqval
}
function freqanalizer(str){
var varfreq2 = 1000;
for (j=0;j<255;j++){
    if(j<16){zero="0";}else{zero="";}
 	xvar = new Buffer(zero+j.toString(16),"hex");
	//console.log(xores(str,xvar)+" char:"+xvar.toString("hex"));
	//console.log(freq(xores(str,xvar)));
	varfreq1 = freq(xores(str,xvar));
	if(varfreq1<varfreq2){varfreq2=varfreq1;char=xvar.toString("hex");strres=xores(str, xvar);}
	
	}
//console.log(strres+"|char:"+char)
return varfreq1,strres;
}

var varfreq2 = 1000;
require('fs').readFileSync('4.txt').toString().split('\n').forEach(function (line) { 
	varfreq1 = freqanalizer(line)[0];
	if(varfreq1<varfreq2){varfreq2=varfreq1;char=xvar.toString("hex");strres=freqanalizer(line)[1]}
	
	


}) 
console.log(strres);