const express = require('express')
const app = express()
app.get("product/search", async function  (req,res) {
    query = req.query;
    data = await products(req.query);
    res.json(data);
  });

  exports.module = app;