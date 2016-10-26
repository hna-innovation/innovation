angular.module('starter.controllers')
  .controller('UserInnovationsCtrl', UserInnovationsCtrl);

function UserInnovationsCtrl($scope, UserService, PageService, Content, $state) {
  'use strict';
  $scope.projects = [];

  PageService.setTitle('我的创意');

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
