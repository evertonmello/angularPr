angular.module("listaTelefonica").controller("listaCtrl", function($scope, $http, contatosApi){

	
		$scope.message = "listaTelefonica";
	/*	$scope.contatos = [
			{nome: "everton", telefone : "321313", color: "blue", data: new Date()},
			{nome: "joao", telefone : "321313",color: "red",data: new Date()},
			{nome: "maria", telefone : "321313", color: "gray", data: new Date()},
			{nome: "embratel", telefone : "321313", color: "blue",data: new Date()},
			{nome: "telefonica", telefone : "321313", color: "blue",data: new Date()}
		];*/
		
		$scope.operadoras = [
			{nome: "vivo", cod :"1024", categoria: "celular", preco : "2"},
			{nome: "tim", cod : "123", categoria: "celular", preco : "5"},
			{nome: "claro", cod: "344", categoria: "fixo", preco : "7"}
		];

		$scope.addContact = function(contato){						
			$scope.contatos.push(angular.copy(contato));	
			delete $scope.contato;												
		};		

		$scope.DelContat = function(contatos){
			$scope.contatos = contatos.filter(function (contato){
				if (!contato.selecionado)return contato
			});
		};	

		$scope.ordenarPor = function(campo){
			$scope.criterio = campo;
			$scope.direcao = !$scope.direcao;
		}
		var get = function(){
			contatosApi.getContatos().then(function(data){					
				$scope.contatos = data.data;				
			});
		}
		get();
	});	