
module.exports=function(io, User, Msg){
	io.sockets.on('connection', function(socket) {
		
		console.log('a user connected');
		socket.emit('sowa-welcome', {wel: 'Welcome to SOWA me explico o no me explico, testo!!!'});
		

		socket.on('sowa-event', function(res_event) {
			
			var json_img = res_event;
			console.log("El json es : "+json_img);
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