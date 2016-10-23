angular.module('starter.controllers')
  .controller('IncubatorResourcesCtrl', function ($scope, RESOURCE, $timeout) {
    'use strict';

    $scope.incubator = RESOURCE.INCUBATOR;

  });

