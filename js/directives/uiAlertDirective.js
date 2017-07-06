angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl : "view/alert.html",
		replace:true,
		scope:{
			title: "@",
			message: "="
		},
		transclude:true
	}
})