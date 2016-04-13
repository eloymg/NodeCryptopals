str1 = new Buffer("1c0111001f010100061a024b53535009181c","hex");
str2 = new Buffer("686974207468652062756c6c277320657965","hex");

for (i=0;i<str1.length;i++){
process.stdout.write((str1[i]^str2[i]).toString(16));
}
