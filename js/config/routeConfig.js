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

    $routeProvider.when("/detalhes/:id", {
        templateUrl: "view/detalhes.html",
        controller: "detalhesCtrl",
        resolve : {
            contato : function (contatosApi, $route){                                                               
                return  contatosApi.getContato($route.current.params.id);
            }   
        }
    });


    $routeProvider.when("/erro", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo:"/contatos"});
});