angular.module('starter.controllers')

    .controller('StepSecondCtrl', StepSecondCtrl)

function StepSecondCtrl($scope, $timeout, Services) {
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
    }, 500)

    // 获取点子详情
    Services.dianziDetail(localStorage.draftId, function (result) {
        if (result.code == 401) {
            if (confirm('请先登陆！')) {
                window.location.href = '/#/innovation';
            }
        }
        else if (result.code == 0) {
            console.log(result)
            $scope.ItemContent = result.data;
        } else {
            console.log(result);
        }
    }, function (error) {
        console.log(error);
    });
};