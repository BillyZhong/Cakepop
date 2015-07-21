var socket = require('socket.io');
var express = require('express');
var app = express();

var server = app.listen(8080);
var io = socket.listen(server);

io.sockets.on('connection', function(c){
	c.on('Gimmedata', function(){
		c.emit('Yaboi', {'kushal': 'Testing Shit'});
	});
});