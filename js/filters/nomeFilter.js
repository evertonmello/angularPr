angular.module("listaTelefonica").filter("name", function(){
	return function(input){

		var listaNames = input.split(" ");
		var nomesProntos = "";
		listaNames.forEach(function (nome){
			 nomesProntos += nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase()+ " ";
		});
		
		return nomesProntos;
	}

});