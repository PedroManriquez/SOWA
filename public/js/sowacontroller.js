
//Inicializo la variable de mi aplicación.
var app = angular.module("sowa", []);

//Uso el servicio factory para acceder a socket io y dejarlo como servicio.
app.factory('socket', function() {
    var socket = io();
    return socket;
});

app.controller("SowaController", function ($scope, socket){
	console.log("inside in SowaController");
	$scope.enviarValores= function(kms){
		var json_sowa = {
							src 	    : 	retornarSrcIMG(),
							porcentaje 	: 	retornarPorcentaje(),
							km          : 	kms
						};
		console.log("JSON-SOWA in Controller:");
		//console.log(json_sowa);
		socket.emit('sowa-event', json_sowa);
		console.log("Envié al json: "+ kms);

	};    
});