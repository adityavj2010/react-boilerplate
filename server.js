
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());


app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(process.env.PORT || 8080,()=>{
  console.log('Server Started')
});