angular.module('starter')

    .controller('StepThirdCtrl', StepThirdCtrl)

function StepThirdCtrl($scope, $ionicPopup, $timeout) {

    var mySwiper1 = new Swiper('#swiper-step2', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType: "fraction"

    });

    $scope.description = "新的办公方式，新的工作模式，打破传统,让办公更有趣，更生动...";
};