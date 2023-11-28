const net = require('net');

const server = net.createServer(socket => {
  console.log('Клиент подключился');

  socket.write('Привет, Клиент!');
  socket.on('data', data => {
    console.log('Получил от клиента:', data.toString());
  });

  socket.on('end', () => {
    console.log('Клиент отключился');
  });
});

server.listen(8000, () => {
  console.log('Сервер запущен на порту 8000');
});
