const http = require('http');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const httpServer = http.createServer();
const PORT = 8080;
const SECRET = 'secret_key';
const EXPIRE_IN = 600;

httpServer.on('listening', () => {
  console.log(`Listening... http://localhost:${PORT}`);
});
httpServer.on('request', (req, res) => {
  if (req.url === '/') {
    res.end(fs.readFileSync('index.html'));
    return;
  }

  if (req.url === '/request-token') {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@test.com',
      isAuthor: true,
    };
    const token = jwt.sign(data, SECRET, {
      expiresIn: EXPIRE_IN,
    });
    res.end(token);
    return;
  }

  if (req.url === '/validate-token') {
    try {
      const token = req.headers['authorization'];
      jwt.verify(token, SECRET);
      res.end('Токен валиден!');
      return;
    } catch (err) {
      console.log('_err_', err);
      res.statusCode = 401;
      res.end('Токен не валиден!');
      return;
    }
  }
});

httpServer.listen(PORT);
