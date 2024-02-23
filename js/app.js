
var app = angular.module('BuscaCep', []);

app.controller('CepCtrl', function ($scope, $http) {
  var CEP_URL = 'http://viacep.com.br/ws/';

  $scope.cep = '72880299';

  $scope.buscar = function() {
    $http.get(CEP_URL + $scope.cep + '/json/').then(function(endereco) {
      $scope.endereco = endereco.data;
    });
  };
});

