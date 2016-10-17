angular.module('starter.controllers')
  .controller('SearchCtrl', function($scope, ProjectsService, Content) {
    'use strict';

    $scope.NO_SEARCH_RESULT = Content.NO_SEARCH_RESULT;
    $scope.isResultTextShown = false;

    $scope.search = function(keyword) {

      ProjectsService.getProductsBySearch(keyword, function(response) {
        $scope.searchResults = response.data.content;
      }, function(error) {
        // TOTO Handle error
      });

      $scope.isResultTextShown = true;
    }

  });
