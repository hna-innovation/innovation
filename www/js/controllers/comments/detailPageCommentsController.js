angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', DetailPageCommentsCtrl);

function DetailPageCommentsCtrl($scope, Content, CommentService) {
    'use strict';

    $scope.targetId = "5801935f7e18f8136206825a";

    // var comments = [
    //     {
    //         creator: {
    //             nickName : "马涛"
    //         },
    //         avator: "../img/user/user.jpg",
    //         content: "这个项目很好，必须支持一下啊。",
    //         time: "10分钟前"
    //     },
    //     {
    //         name: "马涛",
    //         avator: "../img/user/user.jpg",
    //         content: "这个项目很好，想联系你们合作，可以留个联系方式吗？",
    //         time: "10分钟前"
    //     },
    //     {
    //         name: "马涛",
    //         avator: "../img/user/user.jpg",
    //         content: "这个项目很好，必须支持一下啊。",
    //         time: "10分钟前"
    //     },
    //     {
    //         name: "马涛",
    //         avator: "../img/user/user.jpg",
    //         content: "这个项目很好，必须支持一下啊。",
    //         time: "10分钟前"
    //     },
    //     {
    //         name: "马涛",
    //         avator: "../img/user/user.jpg",
    //         content: "这个项目很好，必须支持一下啊。",
    //         time: "10分钟前"
    //     },
    //     {
    //         name: "马涛",
    //         avator: "../img/user/user.jpg",
    //         content: "这个项目很好，必须支持一下啊。",
    //         time: "10分钟前"
    //     }
    // ];

    function _getProjectComments() {
        CommentService.getProjectComments($scope.targetId, function(res){
            $scope.comments = res.data.content;
        }, function(){

        });
    }

    _getProjectComments();

    $scope.submitComment = function(content) {

        var comment = {
            content: $scope.newComment,
            targetId: $scope.targetId
        };

        CommentService.addProjectComment(comment, function(){

        }, function(){
            
        });
    }

}