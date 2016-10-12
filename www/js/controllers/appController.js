angular.module('starter.controllers')
  .controller('AppCtrl', ['$scope', 'AuthEvent', 'ModalServices', function($scope, AuthEvent, ModalServices) {
    'use strict';

    $scope.$on(AuthEvent.NOT_AUTHENTICATED, ModalServices.showPopup);

  }]);
