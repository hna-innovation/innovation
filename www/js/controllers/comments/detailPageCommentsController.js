angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', DetailPageCommentsCtrl);

function DetailPageCommentsCtrl($scope, $stateParams, Content, CommentService, HnaAlert, $window) {
  'use strict';

  var _projectId = $stateParams.projectid;

  $scope.submitComment = function(content) {

    var comment = {
      content: $scope.newComment,
      targetId: _projectId
    };

    CommentService.addProjectComment(comment, function() {
      HnaAlert.success(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
      $window.location.reload();
    }, function() {
      // TODO
    });
  }

  CommentService.getProjectComments(_projectId, function(res) {
    $scope.comments = res.data.content;
  }, function() {
    // TODO
  });
}