angular.module('starter.controllers')
  .controller('PopularResourcesCtrl', function($scope, $state, Content) {
    'use strict';

    $scope.resources = [
        {
            title: "原型制作团队",
            img: '../img/resources/tech/team-1.png',
            tags: ["UX", "设计"],
            likeCount: 532,
            starCount: 24,
            commentCount: 53
        },
        {
            title: "MVP开发团队",
            img: '../img/resources/tech/team-2.png',
            tags: ["软件", "开发"],
            likeCount: 423,
            starCount: 23,
            commentCount: 53
        },
        {
            title: "Scrum咨询团队",
            img: '../img/resources/tech/team-3.png',
            tags: ["敏捷", "XP"],
            likeCount: 101,
            starCount: 42,
            commentCount: 10
        },
        {
            title: "创意包装团队",
            img: '../img/resources/tech/team-4.png',
            tags: ["创意包装"],
            likeCount: 51,
            starCount: 25,
            commentCount: 10
        },
        {
            title: "会议室管理设备",
            img: '../img/resources/tech/resource-1.png',
            tags: ["办公"],
            likeCount: 41,
            starCount: 23,
            commentCount: 10
        },
        {
            title: "开发测试云资源",
            img: '../img/resources/tech/resource-2.png',
            tags: ["BUG管理", "测试"],
            likeCount: 18,
            starCount: 19,
            commentCount: 24
        }
    ];

  });