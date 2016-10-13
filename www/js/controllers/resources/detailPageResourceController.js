angular.module('starter.controllers')
  .controller('DetailPageResourceCtrl', function($scope) {
    'use strict';

    $scope.detail = {
        title: "创业导师资源",
        company: "海创空间",
        introduction: "每满50位支持者抽取1位幸运用户，不满足时也抽取1位。幸运用户将会获得获得获得一级红心猕猴桃1000g。幸运用户将由京东官方抽取，抽奖规则及中奖者名单将在话题区公布。",
        mentor: {
          name: "大海",
          headerIcon: "../images/user/datx.png",
          title: "资深投资人"
        },
        like: "false",
        favorite: "false",
        favoriteCount: 5,
        likeCount: 3115,
        bannerImage: "../img/banner/banner-2.jpg"
      }

    setTimeout(function() {
      Swiper('#swiper2', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        pagination: '.tab-nav',
        paginationClickable: true,
        paginationBulletRender: function(index, tag) {
          var tag = [{
            name: "资源介绍"
          }, {
            name: "创业导师"
          }]
          return "	<li class='swiper-pagination-bullet'><span>" + tag[index].name + "</span></li>"
        },
        onSlideChangeEnd: function(swiper) {
          var obj = angular.element(document.getElementById("swiper2-nav")).find("li");
          var index = swiper.activeIndex;
          if(index == (obj.length + 1)) {
            index = 1;
          } else if(index == 0) {
            index = obj.length;
          }
          index--;
          obj.removeClass("active");
          obj.eq(index).addClass("active");
        }
      })
    }, 1000);
  });
