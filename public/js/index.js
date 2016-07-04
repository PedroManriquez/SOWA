var socket=io();

$('form').submit(function(){
	socket.emit('chat-message', $('#message').val());
	$('#message').val('');
	return false;
});// emitimos el mensaje al servidor para que el lo mencione
//permite escuchar el evento chat-message que el servidor mencionará
socket.on('chat-message', function(msg){
	$('#messages').append($('<li>').text(msg));
});