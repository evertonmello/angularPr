angular.module("listaTelefonica").directive("uiCpf", function($filter){
	return {
		require: "ngModel",
		link: function(scope, element, attrs, ctrl){

			var _formatedCpf = function(cpf){
				cpf = cpf.replace(/[^0-9]+/g, "");
				if(cpf.length > 3) {
					cpf = cpf.substring(0,3) + "." + cpf.substring(3);
				}
				if(cpf.length > 7) {
					cpf = cpf.substring(0,7) + "." + cpf.substring(7,12);
				}
				if(cpf.length > 11) {
					cpf = cpf.substring(0,11) + "-" + cpf.substring(11,15);
				}
				return cpf;
			};

			element.bind("keyup", function(){
				ctrl.$setViewValue(_formatedCpf(ctrl.$viewValue));
				ctrl.$render();
			});

		}
	}
});
