angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', DetailPageCommentsCtrl);

function DetailPageCommentsCtrl($scope, Content, CommentService, HnaAlert, $window) {
  'use strict';

  $scope.targetId = "5801935f7e18f8136206825a";

  _getProjectComments();

  $scope.submitComment = function(content) {

    var comment = {
      content: $scope.newComment,
      targetId: $scope.targetId
    };

    CommentService.addProjectComment(comment, function() {
      HnaAlert.success(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
      $window.location.reload();
    }, function() {
      // TODO
    });
  }

  function _getProjectComments() {
    CommentService.getProjectComments($scope.targetId, function(res) {
      $scope.comments = res.data.content;
    }, function() {
      // TODO
    });
  }
}