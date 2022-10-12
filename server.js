const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send("99 Bottles of beer on the wall");
});

app.listen(4000, () => {
  console.log('listening');
});