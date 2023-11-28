const fs = require('fs');

const readableStream = fs.createReadStream('testfile.txt', 'utf-8');
readableStream.on('data', chunk => {
  console.log('_chunk_', chunk);
  console.log(`Received ${chunk.length} bytes of data.`);
});
readableStream.on('end', () => {
  console.log('No more data to read.');
});
