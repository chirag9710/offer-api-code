const express = require('express')
const {products} = require("./scraping");

const app = express()

app.get('/', function (req, res) {
  res.send('Online')
})

app.get("/search", async function  (req,res) {


  res.send(req.query);
});

app.listen(3000)