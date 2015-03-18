var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 3000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('layout', 'myLayout') // defaults to 'layout'  '

app.use(expressLayouts);
//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
})

app.get('/chuchu', function (req, res) {
  var isAjaxRequest = req.xhr;
  console.log(isAjaxRequest);
  if (isAjaxRequest) {
    console.log(req.query);
    res.send('{"answer": "Server responds: hello world!"}')
  }
  else {
    res.send('not an ajax request');
  }
});

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});