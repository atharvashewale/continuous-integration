const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const message2 = 'Works on my machine.';
  const message = 'Works on my machine.';
  res.send(message);
});

module.exports = app;
