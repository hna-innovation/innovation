angular.module('starter.controllers')
  .controller('UserSentCommentsCtrl', UserSentCommentsCtrl);

function UserSentCommentsCtrl($scope, CommentService, Content, UtilityService, PageService, $state, $ionicViewSwitcher) {

  var _userId = localStorage.userId;


  PageService.setTitle('我发出的评论');

  $scope.comments = [];
  $scope.hasMoreData = true;

  var getCommentsByPage = function() {
    var offset = 0;

    return function() {
      CommentService.getUserComments(offset, function(result) {

        if (result.data.content && result.data.content.length) {
          $scope.comments = UtilityService.concatArray($scope.comments, result.data.content);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        } else {
          $scope.comments.attentionMsg = Content.EMPTY_CONTENT;
          $scope.comments.hasMoreData = false;
        }

      }, function(error) {
        $scope.comments.attentionMsg = Content.TIME_OUT;
        $scope.comments.hasMoreData = false;
      });

      offset++;
    };
  };

  $scope.getComments = getCommentsByPage();

  $scope.getComments();

  $scope.goUserInfoPage = function (otherUserId) {
    if(_userId) {
      _userId == otherUserId ? $state.go('user') : $state.go('other-user', {userId:otherUserId});
    } else {
      $state.go('other-user', {userId:otherUserId})
    }
    $ionicViewSwitcher.nextDirection("forward");
  }

}
