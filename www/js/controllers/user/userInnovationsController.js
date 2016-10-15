angular.module('starter.controllers')
  .controller('UserInnovationsCtrl', UserInnovationsCtrl);

function UserInnovationsCtrl($scope, UserService, Content, $state) {

  // $scope.NO_INNOVATIONS = Content.innovation.NO_INNOVATIONS;

  UserService.getUserProjects(function(result) {

    if (result.data.content && result.data.content.length) {
      $scope.projects = result.data.content;
    }

  }, function() {
    // TODO
  });

}