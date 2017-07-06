angular.module("listaTelefonica").controller("listaCtrl", function($scope, $http, contatosApi,contatos){	
	$scope.contatos = contatos.data;
	$scope.message = "listaTelefonica";
});	