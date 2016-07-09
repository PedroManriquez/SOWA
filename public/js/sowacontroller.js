
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
							src 	    : 	retornarSrcIMG().src,
							porcentaje 	: 	retornarPorcentaje(),
							km          : 	kms
						};
		console.log("JSON-SOWA in Controller:");
		console.log(json_sowa);
		socket.emit('sowa-event', json_sowa);
		console.log("Envié al json: "+ kms);
		$scope.resultKM=(parseInt(kms)*parseInt(retornarPorcentaje()))/100;
	};    
});


app.directive('futerSowa', function(){
	return {
		restrict : 'A',
		template: '<b><p class= "pie-de-pagina">Creadores de SOWA, Guillermo Lemunao, Pedro Manríquez.</p><p class= "pie-de-pagina">Programación Orientada a Eventos.</p><p class= "pie-de-pagina">Universidad de la Frontera, Departamento de Ciencias de la computación e Informática</p><p class= "pie-de-pagina">Créditos a James Cryer y a Daniel Rajendran, Desarrolladores de Resemble.js</p></b>'
	};
});

app.directive('headerSowa',function(){
	return {
		restrict : 'A',
		template : '<div class="container-fluid"><div class="navbar-header"><h3 id="titulo">SOWA: Análisis y comparación de Imágenes</h3></div></div>'
	}
});