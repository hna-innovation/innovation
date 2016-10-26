angular.module('starter.controllers')
  .controller('PopularResourcesCtrl', function ($scope, $stateParams, Content, RESOURCE, PageService) {
    'use strict';

    PageService.setTitle('热门资源');

    $scope.resources = RESOURCE.POPULAR_RESOURCE;

  });
