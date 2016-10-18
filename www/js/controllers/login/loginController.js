angular.module('starter.controllers')
  .controller('LoginCtrl', function ($scope, ModalServices, LoginService, HnaAlert, $window) {
    'use strict';
    $scope.goToRegister = function () {
      ModalServices.goToRegister();
    };

    $scope.closePopup = function () {
      ModalServices.closePopup();
    };

    $scope.loginLoading = false;

    $scope.login = function (data) {

      if(!data)
        return;

      var loginData = {
        email: data.email,
        password: data.password
      }
      if (!data.email || !data.password) {
        return;
      }

      $scope.loginLoading = true;

      LoginService.login(loginData, function (res) {

        if (res.error) {
          HnaAlert.defaultError('登录信息不正确！');
          $scope.loginLoading = false;
        } else {
          HnaAlert.defaultSuccess('登录成功！');
          localStorage.userId = res.data.id;
          localStorage.userHeaderIcon = res.data.headerIcon;
          $window.location.reload();
        }
      });
    }
  });
