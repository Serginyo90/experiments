const fs = require('fs');

const createBigFile = (filename, sizeInMB) => {
  const writableStream = fs.createWriteStream(filename);
  const sizeInBytes = sizeInMB * 1024 * 1024;
  const chunk = 'Hello, World! \n'; // Это строка, которая будет записываться повторно.
  let written = 0;

  const write = () => {
    let canWrite = true;
    while (written < sizeInBytes && canWrite) {
      canWrite = writableStream.write(chunk);
      written += Buffer.byteLength(chunk);
    }

    if (written < sizeInBytes) {
      // Приостановите запись и дождитесь возобновления события drain.
      writableStream.once('drain', write);
    } else {
      // Завершите поток, когда все данные будут записаны.
      writableStream.end();
    }
  };

  write();

  writableStream.on('finish', () => {
    console.log(`File '${filename}' of size ${sizeInMB}MB created.`);
  });
  writableStream.on('error', err => {
    console.error(err);
  });
};

// Использование: создайте файл testfile.txt размером 100 МБ.
createBigFile('testfile.txt', 100);
