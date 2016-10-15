angular.module('starter.controllers')
  .controller('LastInnovationCtrl', function($scope, $state, ProjectsService, UtilityService) {
    'use strict';

    // Get Projects
    $scope.projects = [];
    $scope.hasMoreData = true;

    var getProductsByType = function() {
      var offset = 0;

      return function() {
        ProjectsService.getProductsByType('createdDate', offset, function(data) {

          if (data.data.content && data.data.content.length) {
            $scope.projects = UtilityService.concatArray($scope.projects, data.data.content);
            $scope.$broadcast('scroll.infiniteScrollComplete');
          } else {
            // $scope.attentionMsg = Content.EMPTY_CONTENT;
            $scope.hasMoreData = false;
          }

        }, function(error) {
          // $scope.attentionMsg = Content.TIME_OUT;
          $scope.hasMoreData = false;
        });

        offset++;
      };

    };

    $scope.getProjects = getProductsByType();
    $scope.getProjects();

  });