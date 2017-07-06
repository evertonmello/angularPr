angular.module("listaTelefonica").config(function($routeProvider){
	
	 $routeProvider.when("/contatos", {
    	templateUrl: "view/contatos.html",
    	controller: "listaCtrl",
    	resolve : {
    		contatos : function (contatosApi){    			
    			return  contatosApi.getContatos();
    		}   
    	}
    });

    $routeProvider.when("/novoContato", {
    	templateUrl: "view/novoContato.html",
    	controller: "newContactCtrl",
    	resolve : {
    		operadoras : function (contatosApi){    			
    			return  contatosApi.getOperadoras();
    		}   
    	}  
    });

    $routeProvider.otherwise({redirectTo:"/contatos"});
});