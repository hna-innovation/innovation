angular.module('starter')
  .directive("hnaStastitics", function() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/components/hna-stastitics.html',
      controller: function($scope, $interval) {
        var stopCount,
            stopCountResources,
            stopCountSuccesses;

        $scope.innovationsCount = 0;
        $scope.resourcesCount = 0;
        $scope.successesCount = 0;

        stopCountInnovations = $interval(function() {
          $scope.innovationsCount++;

          if ($scope.innovationsCount > 245)
            $interval.cancel(stopCountInnovations);
        }, 8);

        stopCountResources = $interval(function() {
          $scope.resourcesCount++;

          if ($scope.resourcesCount > 36)
            $interval.cancel(stopCountResources);
        }, 40);

        stopCountSuccesses = $interval(function() {
          $scope.successesCount++;

          if ($scope.successesCount > 25)
            $interval.cancel(stopCountSuccesses);
        }, 40);

      }
    };
  });