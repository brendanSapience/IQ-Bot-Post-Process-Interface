var socketio = require('socket.io');
var genutils = require('./GenericUtils');
var io;
const fs = require('fs');

var DebugMode = false;

// Start
var SERVEROK = true;
var SERVERTIMEOUT = false;


function processRequest(socket) {

	socket.on('get_structure', function(){
		// plex.GetCurrentSessionsInfo(cookies[0],cookies[1],function(result){    
			console.log("Getting Structures");
			fs.readFile('./lib/config.json',(err,data) => {
				if (err) {
					console.log("error reading file config.json"+err);
					socket.emit('server_side_error',err);
				}

				else{
					socket.emit('structure_sent',JSON.parse(data));
				}

			});

	});

	socket.on('save_structure', function(data){
		console.log(data)
		var json = JSON.stringify(data);
		fs.writeFile('./lib/config.json', json, 'utf8', (err) => {
			if (err) throw err;
			console.log('file saved!');
		});
	});

	socket.on('test', function(cookies){
		// plex.GetCurrentSessionsInfo(cookies[0],cookies[1],function(result){    
			console.log("Message Received");
		 socket.emit('gaga','{name:dsfsdf}');

	});


}


exports.listen = function(server) {
	io = socketio.listen(server);
	//io.set('log level', 1);
	io.sockets.on('connection', function (socket) {
		processRequest(socket);
	});
};
