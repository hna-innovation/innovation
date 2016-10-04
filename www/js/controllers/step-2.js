angular.module('starter.controllers')

    .controller('StepSecondCtrl', StepSecondCtrl)

function StepSecondCtrl($scope, Services) {
    // 轮播图
    var mySwiper1 = new Swiper('#swiper-step', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType: "fraction"

    });

    // 获取点子详情
    Services.dianziDetail(localStorage.draftId, function (result) {
        if (result.code == 401) {
            if (confirm('请先登陆！')) {
                window.location.href = '/#/innovation';
            }
        }
        else if (result.code == 0) {
            $scope.ItemContent = result.data;
        } else {
            console.log(result);
        }
    }, function (error) {
        console.log(error);
    });
};