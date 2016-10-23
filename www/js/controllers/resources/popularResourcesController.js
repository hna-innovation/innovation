angular.module('starter.controllers')
  .controller('PopularResourcesCtrl', function ($scope, $stateParams, Content, RESOURCE) {
    'use strict';

    $scope.resources = RESOURCE.POPULAR_RESOURCE;

  });
