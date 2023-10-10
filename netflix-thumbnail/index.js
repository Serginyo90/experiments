const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Устанавливаем заголовок, чтобы не было ошибки CORS
// Видео об этом https://youtu.be/y63hfdRxho4
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Берем статические файлы из каталога «assets»
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Получить список файлов в каталоге «assets»
app.get('/list-assets', (req, res) => {
  fs.readdir(path.join(__dirname, 'assets'), (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    res.json(files);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
