angular.module('starter.controllers')
  .controller('UserFavoriteProjectsCtrl', UserFavoriteProjectsCtrl);

function UserFavoriteProjectsCtrl($scope, UserService, Content, UtilityService) {

  $scope.NO_FAVORITE = Content.user.NO_FAVORITE;

  $scope.favoriteProjects = [];
  $scope.hasMoreData = true;

  var getProjectsByPage = function() {
    var offset = 0;

    return function() {
      UserService.getUserFavoriteProjects(offset, function(result) {

        if (result.data.content && result.data.content.length) {
          $scope.favoriteProjects = UtilityService.concatArray($scope.favoriteProjects, result.data.content);
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

  $scope.getFavoriteProjects = getProjectsByPage();

  $scope.getFavoriteProjects();

}
