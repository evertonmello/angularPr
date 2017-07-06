angular.module("listaTelefonica").filter("elipse", function(){
	return function(input, size){
		if(input.length <= size) return input;
		var outPut = input.substring(0,size)+ "...";  
		return outPut;
	}
});