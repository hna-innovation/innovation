angular.module('starter.controllers')
  .controller('UserReceivedCommentsCtrl', UserReceivedCommentsCtrl);

function UserReceivedCommentsCtrl($scope, CommentService, Content, UtilityService, PageService, $state, $ionicViewSwitcher) {

  PageService.setTitle('我收到的评论');
  var _userId = localStorage.userId;

  $scope.comments = [];
  $scope.hasMoreData = true;

  var getReplyCommentsByPage = function() {
    var offset = 0;

    return function() {
      CommentService.getUserReceivedComments(offset, function(result) {

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

  $scope.getReplyComments = getReplyCommentsByPage();

  $scope.getReplyComments();

  $scope.goUserInfoPage = function (otherUserId) {
    if(_userId) {
      _userId == otherUserId ? $state.go('user') : $state.go('other-user', {userId:otherUserId});
    } else {
      $state.go('other-user', {userId:otherUserId})
    }
    $ionicViewSwitcher.nextDirection("forward");
  }

  $scope.isCurrentUser = function (userId) {
    return _userId === userId;
  }

}
