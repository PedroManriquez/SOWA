//Inicializo la variable de mi aplicación.
var myapp = angular.module('appl', []);

//Uso el servicio factory para acceder a socket io y dejarlo como servicio.
myapp.factory('socket', function() {
    var socket = io();
    
    return socket;
});

myapp.controller("diferenciaCtrlt", function ($scope, socket){
    
    $scope.list = [];
        $scope.text = 'km';
            $scope.submit = function() {
                if ($scope.text) {
                    $scope.list.push(this.text);
                    $scope.text = '';
                }
            };
    
});
