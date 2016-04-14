var functions = require('./functions.js')


var varfreq2 = 1000;
require('fs').readFileSync('4.txt').toString().split('\n').forEach(function (line) { 
	varfreq1 = functions.freqanalizer(line)[2];
	if(varfreq1<varfreq2){varfreq2=varfreq1;char=xvar.toString('hex');strres=functions.freqanalizer(line)[1]}
	
}) 
console.log(strres,char,varfreq2);