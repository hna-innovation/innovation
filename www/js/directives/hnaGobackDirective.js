angular.module('starter')
  .directive('hnaGoback', function($window){
    return {
      restrict: "EAC",
      link : function(scope, element){
        element.on("click",function(){
          $window.history.back();
        })
      }
    }
  })

