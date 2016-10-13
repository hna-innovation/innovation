angular.module('starter.controllers')

	.controller('UserEditCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, $state, Services) {
      $scope.info = {text: $stateParams.text, length: $stateParams.length};

			$scope.getUserInfo = function(){
				$http.get(Services.getUrl("/api/user?userId=" + localStorage.userId)).success(function(result){
						$scope.userInfo=result.data;
				});
			}

			$scope.getUserInfo();
	})
