angular.module('starter.controllers')
  .controller('RegisterCtrl', function ($scope, $rootScope, HnaAlert, $window, LoginService) {
    'use strict';
    $scope.register = function (data) {
      if(!data)
        return

      var registerData = {
        email: data.email,
        password: data.password
      }

      if (!data.email || !data.password || data.passwordRepeat !== data.password) {
        return;
      }

      LoginService.register(registerData, function (res) {
        if (res.error) {
          $scope.existedEmail = true;
        } else {
          HnaAlert.defaultSuccess('注册成功！');
          $rootScope.goToLogin();
        }
      });
    }
  });
