angular.module('starter.controllers')

    .controller('StepThirdCtrl', StepThirdCtrl)

function StepThirdCtrl($scope, $timeout, Services, Page) {
    // set title
    Page.setTitle('点子预览');
    // 轮播图
    $timeout(function () {
        Swiper('#swiper-step', {
            direction: 'horizontal',
            loop: true,
            autoplay: 0,
            autoplayDisableOnInteraction: false,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationType: "fraction"
        });
    }, 500);

    // 获取点子详情
    Services.dianziDetail(localStorage.draftId, function (result) {
        if (result.code == 0) {
            $scope.loading = false;
            $scope.ItemContent = result.data;
        } else {
            console.log(result);
        }
    }, function (error) {
        console.log(error);
    });
};