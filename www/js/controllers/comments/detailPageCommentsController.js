angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', DetailPageCommentsCtrl);

function DetailPageCommentsCtrl($scope, $state, $stateParams, Content, CommentService, HnaAlert, $ionicViewSwitcher, $window) {
  'use strict';

  var _projectId = $stateParams.projectId;
  var _replyUser = $stateParams.replyUser;
  var _commentId = $stateParams.commentId;

  $scope.replyComment = {
    replyUser: _replyUser,
    content: ''
  };

  $scope.submitComment = function(content) {

    var comment = {
      content: $scope.newComment,
      targetId: _projectId
    };

    CommentService.addProjectComment(comment, function() {
      HnaAlert.default(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
      $scope.getProjectComments();
      $scope.newComment = '';

    }, function() {
      // TODO
    });
  }

  $scope.getProjectComments = function() {

    CommentService.getProjectComments(_projectId, function(res) {
      if(res.data && res.data.content){
        $scope.comments = res.data.content;
      }
    }, function() {
      // TODO
    });
  }
  $scope.getProjectComments();

  $scope.cancel = function() {
    $ionicViewSwitcher.nextDirection('back');
    $window.history.back();
  }

  $scope.save = function() {
    var comment = {
      content: $scope.replyComment.content,
      targetId: _projectId,
      parentId: _commentId
    };

    if (!comment.content) {
        HnaAlert.default(Content.comment.ERROR_MESSAGE_EMPTY);
        return;
      };

    CommentService.addProjectComment(comment, function(result){
      debugger
        if(result.code == 0) {
          $ionicViewSwitcher.nextDirection('back');
          $window.history.back();
          HnaAlert.default(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
          $scope.getProjectComments();
        }
        else{
          HnaAlert.default(Content.comment.UPDATE_ERROR);
        }
      }, function(error){
        HnaAlert.default(Content.comment.UPDATE_ERROR);
      })
  }

}
