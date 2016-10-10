angular.module('starter.controllers')
    .controller('SearchCtrl', function ($scope, SearchService, Content) {
        'use strict';

        $scope.NO_SEARCH_RESULT = Content.NO_SEARCH_RESULT;
        $scope.isResultTextShown = false;

        $scope.search = function(keyword) {

			SearchService.getProducts(keyword, function (response) {
				$scope.searchResults = response.data.content;
			}, function (error) {
				// TOTO Handle error
			});

			$scope.isResultTextShown = true;
        }

     });