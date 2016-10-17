angular.module('starter.controllers')
  .controller('UserCtrl', function($scope, $stateParams, $location, $ionicPopup, $state, Services, $window, AuthEvent, UserService, HnaAlert, Content) {

    var resourcesType = $location.search()['type'];

    $scope.getResources = function() {};

    //获取用户信息
    $scope.getUserInfo = function() {
      UserService.getUserInfo(function(result) {
        $scope.userInfo = result.data;
      }, function() {
        HnaAlert.default('获取用户信息出错！');
      });
    }

    $scope.getUserExtensionInfo = function() {
      UserService.getUserExtensionInfo(function(result) {
        $scope.userExtensionInfo = result.data;
      }, function() {
          HnaAlert.default('获取用户信息出错！');
      });
    }

    $scope.goUser = function() {
      $state.go('user', { userid: localStorage.userId });
    }

    $scope.goEditUserInfo = function(target) {
      $state.go('user-edit-info', target);
    }


    $scope.logout = function() {
      $scope.$emit(AuthEvent.LOGOUT);
    }


    $scope.userDefaultHeader = Content.image.DEFAULT_HEADER;
    $scope.getUserInfo();
    $scope.getUserExtensionInfo();

  })
