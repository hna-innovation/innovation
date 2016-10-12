angular.module('starter')
  .directive("hnaHomeHeader", function() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/home/home-header.html'
    };
  });