const express = require('express');
const app = express();
const port = 3000;

// Ping route
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
