angular.module('starter.controllers')
  .controller('ExpertsResourcesCtrl', function ($scope, RESOURCE, PageService) {
    'use strict';

    $scope.tech = RESOURCE.TECH;
    PageService.setTitle('资源库');

  });

