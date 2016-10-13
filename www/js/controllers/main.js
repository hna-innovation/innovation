angular.module('starter')
  .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, PageService) {
  $scope.Page = PageService;
}
