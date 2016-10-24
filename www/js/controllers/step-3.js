angular.module('starter.controllers')

    .controller('StepThirdCtrl', StepThirdCtrl)

function StepThirdCtrl($scope, $timeout, Services, $ionicHistory, $state) {
    // set title
    // Page.setTitle('创意预览');
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
    if($ionicHistory.backView()) {
      $state.go($ionicHistory.backView().stateName);
    } else {
      HnaAlert.default('操作有误, 将跳转回首页!');
      $state.go('innovation');
    }
  }
};
