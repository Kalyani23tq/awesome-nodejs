var fs=require('fs');

var readStream=fs.createReadStream('TestFile.txt');

var WriteStream=fs.createWriteStream('pipewrite.txt');

readStream.pipe(WriteStream);

console.log('Doneeeeeeeee')