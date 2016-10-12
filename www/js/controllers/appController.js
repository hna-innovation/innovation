angular.module('starter.controllers')
  .controller('AppCtrl', ['$scope', 'AuthEvent', 'AuthService', 'ModalServices', function($scope, AuthEvent, AuthService, ModalServices) {
    'use strict';

    $scope.currentUser = {
      id: localStorage.userId
    };

    $scope.$on(AuthEvent.NOT_AUTHENTICATED, function() {
      ModalServices.showPopup();
    });

  }]);