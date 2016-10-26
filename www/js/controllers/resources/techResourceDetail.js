angular.module('starter.controllers')
  .controller('TechResourceDetailCtrl', function ($scope, $state, $stateParams, Content, RESOURCE, PageService) {
    'use strict';
    $scope.detail = RESOURCE.TECH.RESOURCES[$stateParams.detailId];
    PageService.setTitle($scope.detail.name);

  });
