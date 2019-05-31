var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3010;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.listen(PORT, () => {
  console.log(`Serving app on PORT ${PORT}`)
});