const fs = require('fs');

const writableStream = fs.createWriteStream('testfile_1.txt');
writableStream.write('Hello World!\n');
writableStream.end('This is the end!');
writableStream.on('finish', () => {
  console.log('Wrote all data to file.');
});
