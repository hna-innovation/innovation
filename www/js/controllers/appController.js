angular.module('starter.controllers')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($scope, AuthEvent, AuthService, ModalServices, Services, $state, HnaAlert) {
  'use strict';

  $scope.$on(AuthEvent.NOT_AUTHENTICATED, function() {
    HnaAlert.default('请您先登录');
    ModalServices.showPopup();
  });

  $scope.$on(AuthEvent.LOGOUT, function() {
    localStorage.removeItem('userId');

    Services.logout(function() {
      HnaAlert.success('您已退出登录');
      $state.go('innovation');
      $window.location.reload();
    }, function() {
      // TODO
    });
  });
}
