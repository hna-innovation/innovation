angular.module('starter')
  .directive("loadMore", function () {
    return {
      restrict: 'ECMA',
      transclude: true,
      templateUrl: '../../templates/load-more.html'
    }
  })
