var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.sendFile('/home/cakepop/Cakepop/nodejs/test.html');
});
app.get('/src/*', function(req, res){
	res.sendFile('/home/cakepop/Cakepop' + req.path);
});

app.listen(80);