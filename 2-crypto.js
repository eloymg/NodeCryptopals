var functions = require("./functions.js")

str1 = new Buffer("1c0111001f010100061a024b53535009181c","hex");
str2 = new Buffer("686974207468652062756c6c277320657965","hex");

console.log(functions.xor(str1,str2).toString("hex"));