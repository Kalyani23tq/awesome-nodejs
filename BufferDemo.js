var buf=new Buffer(10);

var buf2=new Buffer([3,5,6,7,8]);

var len=buf.write("Hello");
console.log(len);