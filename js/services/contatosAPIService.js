angular.module("listaTelefonica").factory("contatosApi", function($http,config){
	var _getContatos = function(){
		return $http.get(config.baseUrl);
	};
	return {
		getContatos: _getContatos		
	};
});