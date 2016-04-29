var functions = require('./functions')
		data = new Buffer("Rollin' in my 5","ascii")
	   data2 = new Buffer("Rollin' in my .","ascii")
	  console.log(functions.byte_at_time(data));
	  console.log(functions.byte_at_time(data2));
	console.log(functions.byte_at_time_decryptor().toString('ascii'));

