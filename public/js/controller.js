//Inicializo la variable de mi aplicación.
var app = angular.module("app", []);

//Uso el servicio factory para acceder a socket io y dejarlo como servicio.
app.factory('socket', function() {
    var socket = io();
    
    return socket;
});

app.controller("appSowa", function ($scope, socket){
    //$scope.resultKM = "resultKM";
    $scope.ListresultKM = [];
    
    $scope.enviarDiferencia = function(){
        //socket.emit('chat-message', $scope.message);
        console.log("Envié: "+ $scope.resultKM);
        //$scope.resultKM = "";
    };
    
    socket.on('chat-msgs', function(msgs){
        for(i in msgs){
            console.log("mensaje: "+msgs[i]);
            $scope.mensajes.push(msgs[i].mensaje);
        }
        $scope.$digest();
    });
    
});