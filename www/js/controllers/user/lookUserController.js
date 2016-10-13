angular.module('starter.controllers')

	.controller('LookUserCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, Services) {

		var _userId = localStorage.userId;

		$http({
          method:"GET",
          url: Services.getUrl('/api/draft?userId=' + _userId + '&page=0&size=8&sort=createdDate,desc')
		}).success(function(){

		})
	})
