angular.module('starter.controllers')
  .controller('LoginCtrl', function ($scope, LoginService, HnaAlert, $window) {
    'use strict';

    $scope.login = function (data) {
      var loginData = {
        email: data.email,
        password: data.password
      }
      if (!data.email || !data.password) {
        return;
      }
      LoginService.login(loginData, function (res) {
        if (res.error) {
          HnaAlert.defaultError('登录信息不正确！');
        } else {
          localStorage.userId = res.data.id;
          HnaAlert.defaultSuccess('登录成功！');
          $window.location.reload();
        }
      });
    }
  });

