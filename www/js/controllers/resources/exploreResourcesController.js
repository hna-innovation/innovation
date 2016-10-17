angular.module('starter.controllers')
  .controller('ExploreResourcesCtrl', function($scope, $state, Content) {
    'use strict';

    $state.transitionTo('explore-resources.experts');

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

  });