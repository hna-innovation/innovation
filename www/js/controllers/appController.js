angular.module('starter.controllers')
  .controller('AppCtrl', ['$scope', 'AuthEvent', 'AuthService', 'ModalServices', 'Services', '$state',
    function($scope, AuthEvent, AuthService, ModalServices, Services, $state) {
      'use strict';

      $scope.$on(AuthEvent.NOT_AUTHENTICATED, function() {
        ModalServices.showPopup();
      });

      $scope.$on(AuthEvent.LOGOUT, function() {
        localStorage.removeItem('userId');

        Services.logout(function() {
          $state.go('innovation');
        });
      });

    }
  ]);