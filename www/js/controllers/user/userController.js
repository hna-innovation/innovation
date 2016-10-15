angular.module('starter.controllers')

.controller('UserCtrl', function($scope, $stateParams, $location, $ionicPopup, $state, Services, $window, AuthEvent) {

  var resourcesType = $location.search()['type'];

  $scope.getResources = function() {}

  //获取用户信息
  $scope.getUserInfo = function() {
    Services.getUserInfo(localStorage.userId).success(function(result) {
      $scope.userInfo = result.data;
    });
  }

  $scope.goUser = function() {
    $state.go('user', { userid: localStorage.userId });
  }

  $scope.goEditUserInfo = function(target) {
    $state.go('user-edit-info', target);
  }

  $scope.getUserInfo();

  $scope.logout = function() {
    $scope.$emit(AuthEvent.LOGOUT);
  }
})