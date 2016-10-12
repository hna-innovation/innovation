angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', function($scope, Content, CommentService) {
    'use strict';

    $scope.comments = [
    	{
    		name: "马涛",
    		avator: "../img/user/user.jpg",
    		content: "这个项目很好，必须支持一下啊。",
            time: "10分钟前"
    	},
        {
            name: "马涛",
            avator: "../img/user/user.jpg",
            content: "这个项目很好，想联系你们合作，可以留个联系方式吗？",
            time: "10分钟前"
        },
        {
            name: "马涛",
            avator: "../img/user/user.jpg",
            content: "这个项目很好，必须支持一下啊。",
            time: "10分钟前"
        },
        {
            name: "马涛",
            avator: "../img/user/user.jpg",
            content: "这个项目很好，必须支持一下啊。",
            time: "10分钟前"
        },
        {
            name: "马涛",
            avator: "../img/user/user.jpg",
            content: "这个项目很好，必须支持一下啊。",
            time: "10分钟前"
        },
        {
            name: "马涛",
            avator: "../img/user/user.jpg",
            content: "这个项目很好，必须支持一下啊。",
            time: "10分钟前"
        }
    ];

    $scope.submitComment = function(content) {


        var comment = {
            name: "马涛",
            avator: "../img/user/user.jpg",
            content: content,
            time: Content.TIME_JUST_NOW
        };

        // $scope.comments.unshift(comment);

        CommentService.add(comment);
    }

  });
