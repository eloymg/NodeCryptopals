

function pkcspadding(str,bytes){

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
var str = new Buffer('010203040506070809101112131415','hex')
var a = pkcspadding(str,6);
console.log(a);
