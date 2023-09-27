const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

let data = null;

app.get('/poll', (req, res) => {
  const waitForData = () => {
    console.log('waitForData_', data);
    if (data) {
      res.json({ data });
      data = null;
    } else {
      setTimeout(waitForData, 3000);
    }
  };

  waitForData();
});

// Simulate an endpoint that receives data
app.post('/send-data', (req, res) => {
  console.log('_req_body_', req.body);
  data = req.body;
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
