angular.module('starter')
  .directive("loadMore", function () {
    return {
      restrict: 'EA',
      transclude: true,
      templateUrl: '../../templates/load-more.html'
    }
  })
