angular.module('starter.controllers')
  .controller('ReplyCommentEditCtrl', ReplyCommentEditCtrl);

function ReplyCommentEditCtrl($scope, $stateParams, Content, CommentService, HnaAlert, $ionicViewSwitcher, $window) {
  'use strict';

  var _projectId = $stateParams.projectId;
  var _replyUser = $stateParams.replyUser;
  var _commentId = $stateParams.commentId;

  $scope.replyComment = {
    replyUser: _replyUser,
    content: ''
  };

  $scope.cancel = function() {
    $ionicViewSwitcher.nextDirection('back');
    $window.history.back();
  };

  $scope.save = function() {
    var comment = {
      content: $scope.replyComment.content,
      parentId: _commentId
    };

    if (!comment.content) {
        HnaAlert.default(Content.comment.ERROR_MESSAGE_EMPTY);
        return;
      };

    CommentService.addProjectComment(_projectId, comment, function(result){
        if(result.code == 0) {
          $ionicViewSwitcher.nextDirection('back');
          $window.history.back();
          HnaAlert.default(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
        }
        else{
          HnaAlert.default(Content.comment.UPDATE_ERROR);
        }
      }, function(error){
        HnaAlert.default(Content.comment.UPDATE_ERROR);
      })
  };

}
