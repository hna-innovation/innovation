angular.module('starter.controllers')
  .controller('DetailPageResourceCtrl', function ($scope, ResourceService, $stateParams, Content, RESOURCE) {
    'use strict';

    $scope.detail = {
      title: "大数据营销服务",
      company: "海创空间",
      tags: ['软件资源', '大数据', '营销'],
      introduction: '基于航旅、电商 、支付等海航具备特色的数据池，为开发者提供用户画像、聚类等大数据分析，帮助开发者快速开发精准营销解决方案。',
      mentors: [
        {
          name: "大海",
          headerIcon: "../img/face/1.png",
          position: "资深投资人",
          description: "可为电商o2o项目提供项目指导和培训"
        },{
          name: "江山 ShanJiang",
          headerIcon: "../img/face/2.png",
          position: "资深媒体人",
          description: "拥有20年的媒体投资经验, 可为电商o2o项目提供项目指导和培训"
        },{
          name: "黄河",
          headerIcon: "../img/face/3.png",
          position: "资深投资人",
          description: "可为电商" +
          "o2o项目提供项目指导和培训"
        }
      ],
      hasLiked: false,
      hasFavorited: false,
      favoriteCount: 12,
      likeCount: 123,
      banner: "../img/resources/tech/resource-1.jpg"
    };

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
