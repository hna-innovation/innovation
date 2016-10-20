angular.module('starter.controllers')
  .controller('UserCommentsCtrl', UserCommentsCtrl);

function UserCommentsCtrl($scope, CommentService, Content) {

  $scope.NO_COMMENTS = Content.comment.NO_COMMENTS;

  CommentService.getUserComments(function(result) {

    if (result.data.content && result.data.content.length) {
      $scope.comments = result.data.content;
    } else {
      $scope.attentionMsg = Content.EMPTY_CONTENT;
    }

  }, function(error) {
    $scope.attentionMsg = Content.TIME_OUT;

  });

}
