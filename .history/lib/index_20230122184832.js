const express = require('express')
const {products} = require("./scraping");

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)