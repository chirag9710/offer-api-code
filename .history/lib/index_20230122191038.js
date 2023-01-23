const express = require('express')
const {products} = require("./scraping");
const search = require("./search");

const app = express()

app.get('/', function (req, res) {
  res.send('Online')
})


app.use('/product', search);



app.listen(3000)