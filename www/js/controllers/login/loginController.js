angular.module('starter.controllers')
  .controller('LoginCtrl', function ($scope, $state, ModalServices, LoginService, HnaAlert, $ionicViewSwitcher) {
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

      LoginService.login(loginData, function (result) {
        if (result.code == 0) {
          localStorage.userId = result.data.id;
          localStorage.userHeaderIcon = result.data.headerIcon;
          $scope.closePopup();
          HnaAlert.defaultSuccess('登录成功!');
          $ionicViewSwitcher.nextDirection('none');
          $state.reload($state.current);
        } else if (result.code == 1) {
          HnaAlert.defaultError('登录信息不正确!');
          $scope.loginLoading = false;
        } else {
          HnaAlert.defaultError('登录失败');
          $scope.loginLoading = false;
        }
      });
    }
  });
