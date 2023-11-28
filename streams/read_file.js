const fs = require('fs');
const path = require('path');

// Путь к файлу
const filePath = path.join(__dirname, 'testfile.txt');

try {
  // Чтение содержимого файла синхронно
  const data = fs.readFileSync(filePath, 'utf8');
  console.log(data);
} catch (err) {
  console.error('Ошибка при чтении файла:', err);
}
