angular.module('starter.controllers')
  .controller('ExpertsResourcesCtrl', function ($scope, RESOURCE, $timeout) {
    'use strict';

    $scope.tech = RESOURCE.TECH;

  });

