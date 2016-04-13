Array.prototype.unique = function(a){
    return function(){ return this.filter(a) }
}(function(a,b,c){ return c.indexOf(a,b+1) < 0 });

var num = 0;
var uniqs2 =1000;
require('fs').readFileSync('8.txt').toString().split('\n').forEach(function (line) { 
	
	var arr = [];
	for(i=0;i<line.length/32;i++){

		arr.push(line.substring(i*32, i*32+31))

	}
	num++;
	uniqs1=arr.unique().length;
	if(uniqs1<uniqs2){numf=num;uniqs2=uniqs1;}
    //console.log("Linia:"+num+" "+arr.unique().length)

}) 
console.log("Linia:"+numf)