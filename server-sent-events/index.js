const express = require('express');
const app = express();
const PORT = 3000;

// It is from video about CORS https://youtu.be/y63hfdRxho4
// app.use((req, res, next) => {
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// next();
// });

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Send a simple event every second
  let count = 0;
  setInterval(() => {
    res.write(`data: ${count}\n\n`);
    count++;
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
