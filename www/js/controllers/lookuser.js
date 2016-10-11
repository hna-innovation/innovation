angular.module('starter.controllers')

	.controller('lookuserCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, Services) {

		var _userId = "57c96c19d9f2822078df18b9";
		
		$http({
          method:"GET",
          url: Services.getUrl('/api/draft?userId=' + _userId + '&page=0&size=8&sort=createdDate,desc')
		}).success(function(){

		})
	})
