var fs=require('fs')
var data="This is simple write stream";

var writeStream=fs.createWriteStream('StreamWrite.txt');

writeStream.write(data);

writeStream.end();

writeStream.on('finish',function(){
    console.log("Write complte")
})

writeStream.on('error',function(err){
    console.log(err)
});
console.log("Done")