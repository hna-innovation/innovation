angular.module('starter.controllers')
  .controller('UserLikedProjectsCtrl', UserLikedProjectsCtrl);

function UserLikedProjectsCtrl($scope, UserService, Content, PageService) {
  PageService.setTitle("我的获赞");

  UserService.getUserLikedProjects(function(result) {

    if (result.data && result.data.length) {

      $scope.likedProjects = result.data;
      UserService.setUserLikedRead();
    } else {
      $scope.attentionMsg = Content.EMPTY_CONTENT;
    }

  }, function(error) {
    $scope.attentionMsg = Content.TIME_OUT;
  });


}
