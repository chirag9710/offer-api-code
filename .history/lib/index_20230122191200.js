const express = require('express')
const search = require("./search");

const app = express()
app.use('/product', search);

app.get('/', function (req, res) {
  res.send('Online')
})





app.listen(3000)