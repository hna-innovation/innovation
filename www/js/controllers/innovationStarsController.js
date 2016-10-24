angular.module('starter.controllers')
  .controller('InnovationStarsCtrl', InnovationStarsCtrl);

function InnovationStarsCtrl($scope, UserService, Content) {
  'use strict';

  UserService.getInnovationStarUsers(function(result) {

    if (result.data && result.data.length) {
      $scope.stars = result.data;
    } else {
      $scope.attentionMsg = Content.EMPTY_CONTENT;
    }
  }, function(error) {
    // TOTO Handle error
  });

}
