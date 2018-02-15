var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', function (req, res, next) {
  return res.redirect(301, 'http://localhost:3000/foo')
})

app.get('/foo', function (req, res, next) {
  return res.send('ok')
})

app.listen(3000, function () {
  console.log('server started at localhost:3000')
})
