angular.module('starter.controllers')
  .controller('IncubationResourceDetailCtrl', function($scope, $state, $stateParams, Content, RESOURCE, PageService) {
    'use strict';

    $scope.resourcesDetail = RESOURCE.INCUBATION.RESOURCES[$stateParams.detailId];
    PageService.setTitle($scope.resourcesDetail.name);

  });
