var express = require('express');
var app = express();

app.get('*', function(req, res){
	res.sendFile('/home/cakepop/Cakepop/nodejs/test.html');
});

app.listen(80);