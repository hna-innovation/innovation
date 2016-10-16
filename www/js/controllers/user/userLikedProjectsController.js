angular.module('starter.controllers')
  .controller('UserLikedProjectsCtrl', UserLikedProjectsCtrl);

function UserLikedProjectsCtrl($scope, UserService, Content) {

  $scope.NO_LIKED = Content.user.NO_LIKED;

  UserService.getUserLikedProjects(function(result) {

    if (result.data && result.data.length) {

      $scope.likedProjects = result.data;
      console.log($scope.likedProjects);

      UserService.setUserLikedRead();
    }

  }, function() {
    // TODO
  });


}
