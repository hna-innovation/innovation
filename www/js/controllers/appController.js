angular.module('starter.controllers')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($scope, AuthEvent, ModalServices, Services, $state, HnaAlert, Page) {
  'use strict';

  $scope.$on(AuthEvent.NOT_AUTHENTICATED, function() {
    HnaAlert.default('请您先登录');
    ModalServices.showPopup();
  });

  $scope.$on(AuthEvent.LOGOUT, function() {

    $state.go('innovation');
    Services.logout(function() {
      localStorage.removeItem('userId');
      $state.reload('innovation');
      HnaAlert.success('您已退出登录');

    }, function() {
      // TODO
    });
  });

  $scope.$on(Page.INDEX, function() {
    $state.go(Page.INDEX.toLowerCase());
  });
}
