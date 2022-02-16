var fs=require('fs');
var data='';

var readStream=fs.createReadStream('TestFile.txt');

readStream.on('data',function(myinfo){
    data+=myinfo;
});

readStream.on('end',function(){
    console.log(data);
})
readStream.on('error',function(err)
{
    console.log(err.stack);
})
console.log("Done")
