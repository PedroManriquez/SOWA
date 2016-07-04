var port 		= process.env.PORT || 8080,
	express 	= require('express'),
	app 		= express(),
	io			= require('socket.io').
								listen(
									app.listen(port, function(){
										console.log('listening on *:8080');
									})
								);

require('./config')(app);
require('./routes')(app, io);
