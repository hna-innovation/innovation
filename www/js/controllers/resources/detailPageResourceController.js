angular.module('starter.controllers')
  .controller('DetailPageResourceCtrl', function ($scope, ResourceService, $stateParams, Content, RESOURCE) {
    'use strict';

    $scope.detail = RESOURCE.POPULAR_RESOURCE[$stateParams.detailId];

    setTimeout(function () {
      Swiper('#swiper-resource', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        pagination: '.tab-nav',
        paginationClickable: true,
        paginationBulletRender: function (index, tag) {
          var tag = [{
            name: "资源介绍"
          }, {
            name: "创业导师"
          }]
          return "	<li class='swiper-pagination-bullet'><span>" + tag[index].name + "</span></li>"
        },
        onSlideChangeEnd: function (swiper) {
          var obj = angular.element(document.getElementById("swiper-resource-nav")).find("li");
          var index = swiper.activeIndex;
          if (index == (obj.length + 1)) {
            index = 1;
          } else if (index == 0) {
            index = obj.length;
          }
          index--;
          obj.removeClass("active");
          obj.eq(index).addClass("active");
        }
      })
    }, 1000);

    $scope.hasLiked = function (item) {
      item.like ? ResourceService.clickLikeCancle(item) : ResourceService.clickLikeAdd(item);
    }
    $scope.hasFavorited = function (item) {
      item.favorite ? ResourceService.clickFavoriteCancle(item) : ResourceService.clickFavoriteAdd(item);
    }

  });
