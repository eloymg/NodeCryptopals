var functions = require('./functions')
		data = new Buffer("Rollin' in my 5.","ascii")
	   data2 = new Buffer("ollin' in my 5.0","ascii")
	  //console.log(functions.byte_at_time(data).slice(0,16));
	  //console.log(functions.byte_at_time(data));
	  //console.log(functions.byte_at_time(data2).slice(1*16, 1*16+16));
	  //console.log(functions.byte_at_time(data2));
	console.log(functions.byte_at_time_decryptor().toString('ascii'));

