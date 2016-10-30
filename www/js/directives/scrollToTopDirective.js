angular.module('starter')
  .directive("scrollToTop", function() {
    return {
      restrict: 'EA',
      template: '<div class="btn-scroll-to-top-wrapper" ng-show="sttButton" ng-click="scrollToTop()" ><div class="btn-scroll-to-top bg-fb radius" ><i class="icon ion-ios-arrow-thin-up"></i></div></div>',
      controller: function($scope, $attrs, $ionicScrollDelegate, Page){
        
        $scope.sttButton = false;
        $scope.scrollToTop = scrollToTop;

        // 此组件使用时，必须在ion content元素上添加属性delegate-handle，
        // 且其值需与此组件的delegate属性值一样。
        $ionicScrollDelegate.$getByHandle($attrs.delegate).getScrollView().onScroll = function() {
          var scrollTop = $ionicScrollDelegate.getScrollPosition().top;

          $scope.$apply(function(){
            $scope.sttButton = scrollTop >= Page.SHOW_SCROLL_TO_TOP;
          });
        };

        function scrollToTop() {
          var shouldScrollAnimate = true;
          $ionicScrollDelegate.scrollTop(shouldScrollAnimate);
        }

      }
    }
  });
