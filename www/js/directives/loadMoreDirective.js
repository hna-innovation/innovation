angular.module('starter')
  .directive("loadMore", function() {
    return {
      restrict: 'EA',
      scope: {
        hasMoreData: "=",
        onLoadMore: '&'
      },
      templateUrl: '../../templates/load-more.html'
    }
  })