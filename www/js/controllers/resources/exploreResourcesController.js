angular.module('starter.controllers')
  .controller('ExploreResourcesCtrl', function($scope, $state, Content, RESOURCE, PageService) {
    'use strict';

    // $state.transitionTo('explore-resources.experts');
    PageService.setTitle('资源库');

    $scope.resources = [
        {
            title: "创业导师资源",
            img: "../img/user/list-1.jpg",
            tags: ["科技", "科技", "科技"],
            likeCount: 101,
            starCount: 321,
            commentCount: 10
        },
        {
            title: "创业导师资源",
            img: "../img/user/list-1.jpg",
            tags: ["科技", "科技", "科技"],
            likeCount: 101,
            starCount: 321,
            commentCount: 10
        },
        {
            title: "创业导师资源",
            img: "../img/user/list-1.jpg",
            tags: ["科技", "科技", "科技"],
            likeCount: 101,
            starCount: 321,
            commentCount: 10
        },
        {
            title: "创业导师资源",
            img: "../img/user/list-1.jpg",
            tags: ["科技", "科技", "科技"],
            likeCount: 101,
            starCount: 321,
            commentCount: 10
        },
        {
            title: "创业导师资源",
            img: "../img/user/list-1.jpg",
            tags: ["科技", "科技", "科技"],
            likeCount: 101,
            starCount: 321,
            commentCount: 10
        },
        {
            title: "创业导师资源",
            img: "../img/user/list-1.jpg",
            tags: ["科技", "科技", "科技"],
            likeCount: 101,
            starCount: 321,
            commentCount: 10
        }
    ];

    $scope.knowledges = RESOURCE.KNOWLEDGE;
    $scope.professors = RESOURCE.PROFESSOR;
    $scope.train = RESOURCE.TRAIN;

    // swiper-container
    var swiper = new Swiper('.swiper-container-nav', {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 30,
      grabCursor: true
    });
  });
