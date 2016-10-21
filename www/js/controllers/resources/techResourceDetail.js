angular.module('starter.controllers')
  .controller('TechResourceDetailCtrl', function($scope, $state, $stateParams, Content, RESOURCE) {
    'use strict';

    $scope.detail = RESOURCE.TECH.RESOURCES[$stateParams.detailId];

  });
