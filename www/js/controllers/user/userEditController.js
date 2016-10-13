angular.module('starter.controllers')

	.controller('UserEditCtrl', function($scope, $stateParams, HnaAlert, $ionicHistory, $location, $ionicPopup, $state, Services) {
      $scope.info = {target: $stateParams.target, text: $stateParams.text, length: $stateParams.length, mulitline: $stateParams.mulitline, required: $stateParams.required};

      $scope.getUserInfo = function(){
				Services.getUserInfo(localStorage.userId).success(function(result){
						$scope.userInfo=result.data;
				});
			}

      $scope.cancel = function() {
        $ionicHistory.goBack();
      }

      $scope.save = function() {
				if($scope.info.required) {
					var targetValue = $scope.userInfo[$scope.info.target]
					if (targetValue == null || targetValue.length == 0) {
						HnaAlert.default($scope.info.text + '不能为空！');
						return;
					}
				}

				//call service to update the user info.
				$ionicHistory.goBack();
      }

			$scope.getUserInfo();
	})
