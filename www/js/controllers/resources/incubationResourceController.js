angular.module('starter.controllers')
  .controller('IncubationResourcesCtrl', function ($scope, RESOURCE) {
    'use strict';

    $scope.incubation = RESOURCE.INCUBATION;

  });

