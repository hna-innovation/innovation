angular.module('starter.controllers')
  .controller('UserCommentsCtrl', UserCommentsCtrl);

function UserCommentsCtrl($scope, CommentService, Content, UtilityService, PageService) {

  $scope.NO_COMMENTS = Content.comment.NO_COMMENTS;

  $scope.comments = [];
  $scope.hasMoreData = true;

  PageService.setTitle('我的评论');

  var getCommentsByPage = function() {
    var offset = 0;

    return function() {
      CommentService.getUserComments(offset, function(result) {

        if (result.data.content && result.data.content.length) {
          $scope.comments = UtilityService.concatArray($scope.comments, result.data.content);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        } else {
          $scope.attentionMsg = Content.EMPTY_CONTENT;
          $scope.hasMoreData = false;
        }

      }, function(error) {
        $scope.attentionMsg = Content.TIME_OUT;
        $scope.hasMoreData = false;
      });

      offset++;
    };
  };

  $scope.getComments = getCommentsByPage();

  $scope.getComments();

}
