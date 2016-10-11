angular.module('starter')
  .directive('hnaGoback', function(){
    return {
      restrict: "EAC",
      link : function(scope, element){
        element.on("click",function(){
          window.location.href = history.go(-1);
        })
      }
    }
  })

