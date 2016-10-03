angular.module('starter')

    .controller('StepSecondCtrl', StepSecondCtrl)

function StepSecondCtrl($scope) {
    var mySwiper1 = new Swiper('#swiper-step', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType: "fraction"

    });
};