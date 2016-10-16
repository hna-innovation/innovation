angular.module('starter.controllers')
  .controller('InnovationStarsCtrl', InnovationStarsCtrl);

function InnovationStarsCtrl($scope, UserService, Content) {
  'use strict';

  UserService.getInnovationStarUsers(function(result) {

    if (result.data && result.data.length) {
      console.log(result);
      $scope.stars = result.data;
    }
  }, function(error) {
    // TOTO Handle error
  });

}