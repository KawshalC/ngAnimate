var app=angular.module("ngAnimateApp",['ngAnimate']);

app.controller("ngAnimateController", function($scope,$timeout) {
    $scope.customers=[];
    $scope.showControl=false;
    $scope.customer =  [
        {name:"Rachel",description:"One More Day"},
        {name:"Ross",description:"One More Day"},
        {name:"Chandler",description:"One More Day"},
        {name:"Phoebe",description:"One More Day"},
        {name:"Monica",description:"One More Day"},
        {name:"Joey",description:"One More Day"}
    ];
    $scope.load= function(){
        angular.forEach($scope.customer,function(item){
           $scope.customers.push(item);
        })
    };
    $scope.addCustomers=function(){
        var abc=  {name:"Rachel",description:"One More Day"};
        $scope.customers.push(abc);
    };
    $scope.removeCustomers=function(index){
        $scope.customers.splice(index,1);
    };
    $scope.showDiv=function(){
        $scope.showControl=!$scope.showControl;
    };
    $scope.init=function(){
        $timeout(function(){$scope.load()}, 1000);
    };
    $scope.init();
});