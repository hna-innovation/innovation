angular.module('starter.controllers')
  .controller('LastInnovationCtrl', function($scope, $state, ProjectsService) {
    'use strict';

    $scope.getProjects = function(){
      ProjectsService.getProductsByType('createdDate', 0).success(function(result){
          $scope.projects=result.data.content;
      });
    }

    $scope.getProjects();
  });
