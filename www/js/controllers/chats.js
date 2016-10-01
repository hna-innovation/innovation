angular.module('starter.controllers')

  .controller('ChatsCtrl', ChatsCtrl)

function ChatsCtrl($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}
