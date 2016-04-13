function xores(str,xvar){
	var st="";
	var w = 0;
	for (i=0;i<str.length;i++){
	st = st+(str[i]^xvar[w]).toString(16);
		if(w>=xvar.length-1){w=0}else{w=w+1}	
	}
	return st;
}

str1 = new Buffer("Burning 'em, if you ain't quick and nimble I go crazy when I hear a cymbal","ascii");
key = new Buffer("ICE","ascii");

console.log(xores(str1,key));
