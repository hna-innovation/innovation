angular.module('starter.controllers')
  .controller('LastInnovationCtrl', LastInnovationCtrl);

function LastInnovationCtrl($scope, ProjectsService, UtilityService, PageService) {
  'use strict';
  PageService.setTitle("最新创意");
  // Get Projects
  $scope.projects = [];
  $scope.hasMoreData = true;

  var getProductsByType = function() {
    var offset = 0;

    return function() {
      ProjectsService.getProductsByType('createdDate', offset, function(data) {

        if (data && data.data && data.data.content && data.data.content.length) {
          $scope.projects = UtilityService.concatArray($scope.projects, data.data.content);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        } else {
          $scope.hasMoreData = false;
        }

      }, function(error) {
        $scope.hasMoreData = false;
      });

      offset++;
    };

  };

  $scope.getProjects = getProductsByType();
  $scope.getProjects();

}
