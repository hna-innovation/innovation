angular.module('starter.controllers')
  .controller('UserEditMessagesCtrl', UserEditMessagesCtrl);

function UserEditMessagesCtrl($scope, CommentService, Content, $stateParams, PageService, $state, $window, HnaAlert, $ionicViewSwitcher) {

  PageService.setTitle('编辑私信');
  $scope.replyComment = {
    replyUser: $stateParams.toUserName,
    content: ''
  };

  $scope.cancel = function() {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('user-messages',{}, {reload: false});
  }

  $scope.save = function() {
    var comment = {
      content: $scope.replyComment.content,
      toUserId: $stateParams.toUserId,
      parentId: $stateParams.messageId
    };

    if (!comment.content) {
      HnaAlert.default(Content.comment.ERROR_MESSAGE_EMPTY);
      return;
    };

    CommentService.addProjectComment(comment, function(result){
      if(result.code == 0) {
        $ionicViewSwitcher.nextDirection('back');
        $state.go('user-messages',{}, {reload: true});
        HnaAlert.default(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
      }
      else{
        HnaAlert.default(Content.comment.UPDATE_ERROR);
      }
    }, function(error){
      HnaAlert.default(Content.comment.UPDATE_ERROR);
    })
  }

  $scope.isCurrentUser = function (userId) {
    return localStorage.userId === userId;
  }
}
