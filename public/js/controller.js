//Inicializo la variable de mi aplicación.
var app = angular.module("app", []);

//Uso el servicio factory para acceder a socket io y dejarlo como servicio.
app.factory('socket', function() {
    var socket = io();
    
    return socket;
});

app.controller("appSowa", function ($scope, socket){
    $scope.kilometros = [];
    
    $scope.enviarKilometros = function(){
        socket.emit('chat-message', $scope.difKilometros);
        console.log("Envié: "+ $scope.difKilometros);
        $scope.difKilometros = "";
    };
    /*
    socket.on('chat-message', function(msg){
        console.log("Recibí : "+ msg);
        $scope.mensajes.push(msg);
        $scope.$digest();
    });
    
    socket.on('chat-msgs', function(msgs){
        for(i in msgs){
            console.log("mensaje: "+msgs[i]);
            $scope.mensajes.push(msgs[i].mensaje);
        }
        $scope.$digest();
    });
    */
});
