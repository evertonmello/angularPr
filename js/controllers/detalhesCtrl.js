angular.module("listaTelefonica").controller("detalhesCtrl", function($scope, $routeParams,contatosApi, contato){	
		$scope.contato = contato.data[0];
});	

