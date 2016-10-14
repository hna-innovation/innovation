angular.module('starter.controllers')
  .controller('LastInnovationCtrl', function($scope, $state, ProjectsService) {
    'use strict';

    $scope.getProjects = function(){
      ProjectsService.getProductsByType('likeCount', 0).success(function(result){
          $scope.projects=result.data;
      });
    }

    $scope.getProjects();
  });
