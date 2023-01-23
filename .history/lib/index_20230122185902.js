const express = require('express')
const {products} = require("./scraping");

const app = express()

app.get('/', function (req, res) {
  res.send('Online')
})

app.get("/search", async function  (req,res) {
  query = req.query;
 data = await products(req.query);
  res.send(JSON.parse(data));
});

app.listen(3000)