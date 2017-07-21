var app=angular.module("myApp");

app.controller("outputCtrl", function($scope, myServ){

    $scope.output=myServ.readOut();

});