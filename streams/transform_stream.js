const fs = require('fs');
const { Transform } = require('stream');

const inputFile = 'testfile.txt';
const outputFile = 'testfile_1.txt';

// Создайте поток преобразования
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Разделите фрагмент на строки и добавьте текст в каждую строку.
    const transformed = chunk
      .toString()
      .split('\n')
      .map(line => line + ' - Updated')
      .join('\n');
    this.push(transformed);
    callback();
  },
});

// Создаем читаемый поток из входного файла.
const readableStream = fs.createReadStream(inputFile);

// Создаем записываемый поток для выходного файла.
const writableStream = fs.createWriteStream(outputFile);

// Направляем потоки
readableStream.pipe(transformStream).pipe(writableStream);

writableStream.on('finish', () => {
  console.log('File has been transformed and saved.');
});
