angular.module('starter.controllers')
  .controller('IncubationResourcesCtrl', function ($scope, RESOURCE, PageService) {
    'use strict';
    PageService.setTitle('资源库');
    $scope.incubation = RESOURCE.INCUBATION;

  });

