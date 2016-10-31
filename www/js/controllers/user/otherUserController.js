angular.module('starter.controllers')

	.controller('OtherUserCtrl', function($scope, $stateParams, $timeout, UserService, PageService) {

	  var _userID = $stateParams.userId;

    UserService.getOtherUserResume(_userID, function (result) {

      if (result.code == 0) {
        $scope.userInfo = result.data;
        PageService.setTitle($scope.userInfo.nickName + '的主页');
      }
    }, function () {
    });
  });
