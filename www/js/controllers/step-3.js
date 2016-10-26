angular.module('starter.controllers')

    .controller('StepThirdCtrl', StepThirdCtrl)

function StepThirdCtrl($scope, $timeout, Services, $stateParams, $state, $ionicViewSwitcher, $window, PageService) {
    var _parentPage = $stateParams.parentPage;
    // set title
    PageService.setTitle('创意预览');
    // 轮播图
    $timeout(function () {
        Swiper('#swiper-step', {
            direction: 'horizontal',
            loop: false,
            autoplay: 0,
            autoplayDisableOnInteraction: false,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationType: "fraction"
        });
    }, 500);

    // 获取创意详情
    Services.dianziDetail(localStorage.draftId, function (result) {
        if (result.code == 0) {
            $scope.loading = false;
            $scope.ItemContent = result.data;
        } else {
        }
    }, function (error) {
      //TODO
    });

  $scope.goBack = function() {
    if(_parentPage) {
      $state.go(_parentPage);
      $ionicViewSwitcher.nextDirection("back");
    } else {
      $window.history.back();
    }
  }
};
