angular.module("listaTelefonica").controller("newContactCtrl", function($scope,$location, $http,operadoras,contatosApi) {
	$scope.app = "Lista telefonica";
	$scope.operadoras = operadoras;	

	$scope.addContact = function(contato){				
			contatosApi.saveContato(contato).then(function(data){
				$location.path("/contatos");		
		});						
	};		
});