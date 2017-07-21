var app=angular.module("myApp");

app.service("myServ",function(){

    this.input={};

    this.readIn=function(object){
        this.input=object;

    };

     this.readOut=function(){
        return this.input;

    };
    



});