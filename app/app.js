const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/custom_launcher', async(req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'custom_launcher.html'));
});

app.listen(10086, () => {
    console.log("Server successfully running on port 10086");
  });