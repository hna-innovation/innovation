angular.module('starter.controllers')
  .controller('UserInnovationsCtrl', UserInnovationsCtrl);

function UserInnovationsCtrl($scope, UserService, HnaAlert, Content, $state) {
  'use strict';
  $scope.projects = [];
  UserService.getUserProjects().success(function(data) {
    if (data.data.content && data.data.content.length) {
      $scope.projects = data.data.content;
    } else {
      $scope.attentionMsg = Content.EMPTY_CONTENT;
    }
  }).error(function(error) {
    $scope.attentionMsg = Content.TIME_OUT;
  });
}
