angular.module('starter')
  .directive("hnaStastitics", function () {
    return {
      restrict: 'E',
      templateUrl: '../../templates/components/hna-stastitics.html',
      controller: function ($scope, ProjectsService) {
        // Get state of projects
        ProjectsService.getStateOfProducts(function (data) {
          $scope.innovationsCount = data.data.totalCount;
          $scope.newCount = data.data.newCount
        }, function () {

        });
      }
    };
  });
