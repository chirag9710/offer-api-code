const express = require('express')
const search = require("./search");

const app = express()


mongoose.connect(CONFIG.dbURL(), {
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

app.listen(3000)