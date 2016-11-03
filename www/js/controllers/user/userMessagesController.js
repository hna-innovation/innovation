angular.module('starter.controllers')
  .controller('UserMessagesCtrl', UserMessagesCtrl);

function UserMessagesCtrl($scope, CommentService, Content, UtilityService, PageService, $state, $ionicViewSwitcher) {

  PageService.setTitle('我的私信');
  var _userId = localStorage.userId;

  // $scope.prefix = '';
  $scope.messages = [];
  $scope.hasMoreData = true;

  var getMessagesByPage = function() {
    var offset = 0;

    return function() {
      CommentService.getUserMessages(offset, function(result) {

        if (result.data.content && result.data.content.length) {
          $scope.messages = UtilityService.concatArray($scope.messages, result.data.content);
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

  $scope.getMessages = getMessagesByPage();

  $scope.getMessages();

  $scope.isCurrentUser = function (userId) {
    return _userId === userId;
  }

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
