const http = require('http');
const fs = require('fs');
const path = require('path');

const httpServer = http.createServer((req, res) => {
  // Устанавливаем CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  console.log(`_${req.method}: ${req.url}_`);
  if (req.url === '/mail') {
    // Указываем путь к файлу mail.html
    const indexPath = path.join(__dirname, 'mail.html');
    // Читаем mail.html и отправляем его содержимое
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Ошибка при чтении mail файла');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }

  if (req.url === '/confirm') {
    // Указываем путь к файлу confirm.html
    const indexPath = path.join(__dirname, 'confirm.html');
    // Читаем confirm.html и отправляем его содержимое
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Ошибка при чтении confirm файла');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }

  if (req.url === '/approve') {
    console.log('Получен POST-запрос from user');
    // Set header to indicate plain text content
    res.setHeader('Content-Type', 'text/plain');
    res.end('Request received');
  }
});

httpServer.on('listening', () => {
  console.log('Сервер запущен на http://localhost:3000');
});

httpServer.listen(3000);
