angular.module('starter.controllers')
  .controller('UserEditMessagesCtrl', UserEditMessagesCtrl);

function UserEditMessagesCtrl($scope, MessageService, Content, $stateParams, PageService, $state, HnaAlert, $ionicViewSwitcher) {

  PageService.setTitle('编辑私信');
  $scope.replyMessage = {
    replyUser: $stateParams.toUserName,
    content: ''
  };

  $scope.cancel = function() {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('user-messages',{}, {reload: false});
  }

  $scope.save = function() {
    var message = {
      content: $scope.replyMessage.content,
      toUserId: $stateParams.toUserId,
      replyMessageId: $stateParams.messageId
    };

    if (!message || !message.content) {
      HnaAlert.default(Content.message.ERROR_MESSAGE_EMPTY);
      return;
    };

    MessageService.addUserMessage(message, function(result){
      if(result.code == 0) {
        $ionicViewSwitcher.nextDirection('back');
        $state.go('user-messages',{}, {reload: true});
        HnaAlert.default(Content.message.SUCCESS_MESSAGE_ADDED_COMMENT);
      }
      else{
        HnaAlert.default(Content.message.UPDATE_ERROR);
      }
    }, function(error){
      HnaAlert.default(Content.message.UPDATE_ERROR);
    })
  }

  $scope.isCurrentUser = function (userId) {
    return localStorage.userId === userId;
  }
}
