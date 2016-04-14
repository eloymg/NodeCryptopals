var functions = require('./functions.js')

data1 = new Buffer("this is a test","ascii");
data2 = new Buffer("wokka wokka!!!","ascii");

console.log(functions.hammingdistance(data1,data2));

fs.readFile('6.txt', 'utf8', function (err,data) {

		data = new Buffer(data,'base64');
		

	});