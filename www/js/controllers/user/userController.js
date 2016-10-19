angular.module('starter.controllers')
  .controller('UserCtrl', function($scope, $stateParams, $location, $ionicPopup, $state, Services, $window, AuthEvent, UserService, HnaAlert, Content) {

    var resourcesType = $location.search()['type'];

    $scope.getResources = function() {};

    //获取用户信息
    $scope.getUserInfo = function() {
      UserService.getUserInfo(function(result) {
        $scope.userInfo = result.data;
        //UserInfo成功返回后再去请求ExtensionInfo
        $scope.getUserExtensionInfo();
      }, function(result) {
        //出错信息统一在app.js处理,包括错误码401、404、504
        // HnaAlert.default('获取用户信息出错！');
      });
    }

    $scope.getUserExtensionInfo = function() {
      UserService.getUserExtensionInfo(function(result) {
        $scope.userExtensionInfo = result.data;
      }, function() {
        //出错信息统一在app.js处理,包括错误码401、404、504
        // HnaAlert.default('获取用户信息出错！');
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

  })
