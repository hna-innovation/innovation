angular.module('starter.controllers')
  .controller('UserJoinedInnovationsCtrl', UserJoinedInnovationsCtrl);

function UserJoinedInnovationsCtrl($scope, UserService, PageService, Content, $state) {
  'use strict';
  $scope.projects = [];

  PageService.setTitle('我参与的创意');

  UserService.joinedProject().success(function(data) {
    if (data.data && data.data.length) {
      $scope.projects = data.data;
    } else {
      $scope.attentionMsg = Content.EMPTY_CONTENT;
    }
  }).error(function(error) {
      $scope.attentionMsg = Content.TIME_OUT;
  });
}
