angular.module("listaTelefonica").config(function(genaratorProvider){
    genaratorProvider.setX("521");
    console.log(genaratorProvider.getX());
});