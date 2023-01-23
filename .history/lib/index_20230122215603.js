const express = require('express');
const config = require('./config');
const search = require("./search");
const mongoose = require('mongoose');

const app = express()


mongoose.connect(config.dbURL(), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database')
}).catch((err) => {
  console.log('unable to connect to database: ', err);
});



app.use('/product', search);

app.get('/', function (req, res) {
  res.send('Online')
})

app.listen(config.port);