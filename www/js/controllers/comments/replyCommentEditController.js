angular.module('starter.controllers')
  .controller('ReplyCommentEditCtrl', ReplyCommentEditCtrl);

function ReplyCommentEditCtrl($scope, $state, $stateParams, Content, CommentService, HnaAlert, $ionicViewSwitcher, PageService) {
  'use strict';

  var _projectId = $stateParams.projectId;
  var _replyUser = $stateParams.replyUser;
  var _commentId = $stateParams.commentId;

  var _parentPage = PageService.getParentPage();

  $scope.replyComment = {
    replyUser: _replyUser,
    content: ''
  };

  $scope.cancel = function() {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('detail-page-comments', {projectId: _projectId, parentPage: _parentPage}, {reload: false});
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
        if(result.code == 0) {
          $ionicViewSwitcher.nextDirection('back');
          $state.go('detail-page-comments', {projectId: _projectId, parentPage: _parentPage}, {reload: true});
          HnaAlert.default(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
        }
        else{
          HnaAlert.default(Content.comment.UPDATE_ERROR);
        }
      }, function(error){
        HnaAlert.default(Content.comment.UPDATE_ERROR);
      })
  }


}
