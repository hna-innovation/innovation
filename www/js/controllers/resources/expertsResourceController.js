angular.module('starter.controllers')
  .controller('ExpertsResourcesCtrl', function ($scope, RESOURCE, $timeout) {
    'use strict';

    $timeout(function () {
      var swiper = new Swiper('.swiper-container-resource-team', {
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : false
        }
      });
    })

    $scope.tech = RESOURCE.TECH;

  });

