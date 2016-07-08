
module.exports=function(io, imgsch){
	io.sockets.on('connection', function(socket) {
		
		console.log('Welcome to SOWA me explico o no me explico, testo!!!');
		socket.emit('sowa-welcome', {wel: 'Welcome to SOWA me explico o no me explico, testo!!!'});
		

		socket.on('sowa-event', function(res_event) {
			console.log('escucho evento sowa-event');
			var json_img = res_event;
			var json_sowa = new imgsch(json_img);
			json_sowa.save(function(){
			    console.log("SOWA say: data succesfully");
			});
			
			//mensaje a todos
			console.log("Emití: "+res_event);
			
			//mensaje solo a mi
			//socket.emit('chat-message', msg);
			
			//mensaje a todos menos a mi
			//socket.broadcast.emit('chat-message', msg);
		});
		
		socket.on('disconnect', function() {
		  console.log('user disconnected socket');
		});
	});
};