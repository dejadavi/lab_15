var app=angular.module("myApp");

app.controller("inputCtrl", function($scope, myServ, $location){

    $scope.input={}
    $scope.ting="Waddup"
    $scope.submitWords=function(){
      myServ.readIn($scope.input);
      //console.log(myServ.readOut())
      $location.path("/output");
        
    };


});