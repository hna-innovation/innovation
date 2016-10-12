angular.module('starter.controllers')
  .controller('RegisterCtrl', function ($scope, HnaAlert, $window, LoginService) {
    'use strict';
    $scope.register = function (data) {
      var registerData = {
        email: data.email,
        password: data.password
      }

      if (!data.email || !data.password || !data.passwordRepeat) {
        return;
      }

      LoginService.register(registerData, function (res) {
        if (res.error) {
          // HnaAlert.error('注册失败!');
          $scope.existedEmail = true;
        } else {
          HnaAlert.success('注册成功！');
        }
      });
    }
  });
