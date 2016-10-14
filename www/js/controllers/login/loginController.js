angular.module('starter.controllers')
  .controller('LoginCtrl', function ($scope, ModalServices, LoginService, HnaAlert, $window) {
    'use strict';
    $scope.goToRegister = function () {
      ModalServices.goToRegister();
    };

    $scope.closePopup = function () {
      ModalServices.closePopup();
    };
    $scope.login = function (data) {
      $scope.loginLoading = false;
      if(!data)
        return;

      var loginData = {
        email: data.email,
        password: data.password
      }
      if (!data.email || !data.password) {
        return;
      }
      LoginService.login(loginData, function (res) {
        $scope.loginLoading = true;

        if (res.error) {
          HnaAlert.defaultError('登录信息不正确！');
          $scope.loginLoading = false;
        } else {
          localStorage.userId = res.data.id;
          HnaAlert.defaultSuccess('登录成功！');
          $window.location.reload();
        }
      });
    }
  });
