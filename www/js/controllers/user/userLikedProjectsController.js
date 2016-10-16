angular.module('starter.controllers')
  .controller('UserLikedProjectsCtrl', UserLikedProjectsCtrl);

function UserLikedProjectsCtrl($scope, UserLikedService, Content) {

  $scope.NO_LIKED = Content.comment.NO_LIKED;

  UserLikedService.getUserLikedProjects(function(result) {

    if (result.data && result.data.length) {

      $scope.likedProjects = result.data;
      console.log("LikdeProjects", $scope.likedProjects);
    }

  }, function() {
    // TODO
  });

}
