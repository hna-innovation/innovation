angular.module('starter.controllers')
  .controller('PopularInnovationCtrl', PopularInnovationCtrl);

function PopularInnovationCtrl($scope, ProjectsService, UtilityService, PageService) {
  'use strict';

  // Get Projects
  $scope.projects = [];
  $scope.hasMoreData = true;

  PageService.setTitle('热门创意');

  var getProductsByType = function() {
    var offset = 0;

    return function() {
      ProjectsService.getProductsByType('likeCount', offset, function(data) {

        if (data.data.content && data.data.content.length) {
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
