angular.module('starter.controllers')

	.controller('UserEditCtrl', function($scope, $stateParams, $http, $ionicHistory, $location, $ionicPopup, $state, Services) {
      $scope.info = {text: $stateParams.text, length: $stateParams.length};

      $scope.getUserInfo = function(){
				Services.getUserInfo(localStorage.userId).success(function(result){
						$scope.userInfo=result.data;
				});
			}

      $scope.cancel = function() {
        $ionicHistory.goBack();
      }

      $scope.save = function() {

      }
			$scope.getUserInfo();
	})
