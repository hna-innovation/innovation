angular.module('starter.controllers')
  .controller('IncubationResourceDetailCtrl', function($scope, $state, $stateParams, Content, RESOURCE) {
    'use strict';

    $scope.resourcesDetail = RESOURCE.INCUBATION.RESOURCES[$stateParams.detailId];

  });
