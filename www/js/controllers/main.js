angular.module('starter')
  .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, Page) {
  $scope.Page = Page;
}
