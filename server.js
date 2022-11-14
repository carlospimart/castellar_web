const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

var logger = (req, res, next) => {
  var url = req.url;
  var time = new Date();
  console.log('Received request for ' + url + ' at ' + time);
  next();

}
app.use('/LogeIn', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

app.use('/Admin/dashboard/control-panel', logger, (req, res) => {
  res.send({
    tokenAdmin: 'test123'
  });
  });

app.listen(8080, () => console.log('API is running on http://localhost:8080/LogeIn'));