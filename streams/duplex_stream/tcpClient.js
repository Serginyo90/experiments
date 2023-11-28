const net = require('net');

const client = new net.Socket();

client.connect(8000, '127.0.0.1', () => {
  console.log('Подключен к серверу');

  // Отправляем сообщение серверу
  client.write('Привет, Сервер!');
});

client.on('data', data => {
  console.log('Получил от сервера:', data.toString());
  client.destroy(); // Уничтожаем сокет после получения ответа
});

client.on('close', () => {
  console.log('Соединение закрыто');
});
