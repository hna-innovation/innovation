angular.module('starter.services')

  .directive('autoExpanding', function () {
    return {
      restrict: 'A',
      controller: function ($scope, $element, $attrs, $timeout) {
        setHeight(0);
        $timeout(setHeightToScrollHeight);

        function setHeight(height) {
          $element.css('height', height + 'px');
          $element.css('max-height', height + 'px');
        }

        function setHeightToScrollHeight() {
          setHeight(0);
          var scrollHeight = angular.element($element)[0]
            .scrollHeight;
          if (scrollHeight !== undefined) {
            setHeight(scrollHeight);
          }
        }

        $scope.$watch(function () {
          return angular.element($element)[0].value;
        }, setHeightToScrollHeight);
      }
    };
  });
