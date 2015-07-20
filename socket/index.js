var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  var pageBody = document.body;
  var pageTitle = document.title;
  res.send(pageBody);
  res.send(pageTitle);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
