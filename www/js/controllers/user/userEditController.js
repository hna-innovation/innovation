angular.module('starter.controllers')

	.controller('UserEditCtrl', function($scope, $stateParams, HnaAlert, $ionicHistory, $location, $ionicPopup, $state, UserService, Content) {
      $scope.info = {target: $stateParams.target, text: $stateParams.text, length: $stateParams.length, mulitline: $stateParams.mulitline, required: $stateParams.required};

			$scope.getUserInfo = function() {
	      UserService.getUserInfo(function(result) {
	        $scope.userInfo = result.data;
	      }, function() {
	        HnaAlert.default(Content.user.LOAD_DATA_ERROR);
	      });
	    }

      $scope.cancel = function() {
        $ionicHistory.goBack();
      }

      $scope.save = function() {
				if($scope.info.required) {
					var targetValue = $scope.userInfo[$scope.info.target]
					if (targetValue == null || targetValue.length == 0) {
						HnaAlert.default($scope.info.text + Content.user.NO_EMPTY);
						return;
					}
				}

				UserService.setUserProfile({
					nickName: $scope.userInfo.nickName,
					company: $scope.userInfo.company,
					hobby: $scope.userInfo.hobby,
					speciality: $scope.userInfo.speciality
				}).success(function(result){
					if(result.code == 0) {
						//HnaAlert.default(Content.user.LOAD_DATA_SUCCESS);
						$ionicHistory.goBack();
					}
					else{
						HnaAlert.default(Content.user.UPDATE_ERROR);
					}
				}).error(function(error){
					HnaAlert.default(Content.user.UPDATE_ERROR);
				})
      }

			$scope.getUserInfo();
	})
