const { myEmitter } = require('./ee.js');
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const eventName = req.body.event;

  myEmitter.on(eventName, name => {
    console.log(`Hello, ${name || 'Anonymous'}!`);
  });
  res.send('Registered');
});

// Simulate an endpoint that receives data
app.post('/emit', (req, res) => {
  myEmitter.emit(req.body.event, req.body.name);
  res.send('Emitted');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
