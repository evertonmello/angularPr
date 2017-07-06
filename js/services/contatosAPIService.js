angular.module("listaTelefonica").factory("contatosApi", function($http,config, $routeParams ){
	var _getContatos = function(){
		return $http.get(config.baseUrl);
	};

	var _getContato = function(id){		
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/' + id,									
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	};

	var _saveContato = function(contato){
		return $http({
			method: 'POST',
			url: 'http://localhost:3000/post',						
			data: contato,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
	};

	var _getOperadoras = function(){
		var operadoras = [
			{nome: "vivo", cod :"1024", categoria: "celular", preco : "2"},
			{nome: "tim", cod : "123", categoria: "celular", preco : "5"},
			{nome: "claro", cod: "344", categoria: "fixo", preco : "7"}
		];	
		return operadoras;
	};

	return {
		saveContato: _saveContato,
		getOperadoras:_getOperadoras,
		getContatos: _getContatos,
		getContato: _getContato		
	};
});