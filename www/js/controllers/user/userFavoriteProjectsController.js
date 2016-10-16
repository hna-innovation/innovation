angular.module('starter.controllers')
  .controller('UserFavoriteProjectsCtrl', UserFavoriteProjectsCtrl);

function UserFavoriteProjectsCtrl($scope, UserService, Content) {

  $scope.NO_FAVORITE = Content.user.NO_FAVORITE;

  UserService.getUserFavoriteProjects(function(result) {

    if (result.data.content && result.data.content.length) {

      $scope.favoriteProjects = result.data.content;
    }

  }, function() {
    // TODO
  });

}
