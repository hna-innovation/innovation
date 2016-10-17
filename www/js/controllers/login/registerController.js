angular.module('starter.controllers')
  .controller('RegisterCtrl', function ($scope, ModalServices, HnaAlert, $window, LoginService) {
    'use strict';
    $scope.goToLogin = function () {
      ModalServices.goToLogin();
    };

    $scope.closePopup = function () {
      ModalServices.closePopup();
    };
    $scope.existedEmail = false;
    $scope.register = function (data) {
      if(!data)
        return;

      var registerData = {
        email: data.email,
        password: data.password,
        nickName: data.username
      }

      if (!data.email || !data.password || data.passwordRepeat !== data.password) {
        return;
      }

      LoginService.register(registerData, function (res) {
        if (res.error) {
          $scope.existedEmail = true;
          $scope.EXISTED_EMAIL_MSG = "邮箱已存在";
          $scope.registerForm.$setPristine();
        } else {
          HnaAlert.defaultSuccess('注册成功！');
          ModalServices.goToLogin();
        }
      });
    }
  });
