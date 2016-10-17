angular.module('starter.controllers')

	.controller('UserEditCtrl', function($scope, $stateParams, HnaAlert, $ionicHistory, $location, $ionicPopup, $state, UserService) {
      $scope.info = {target: $stateParams.target, text: $stateParams.text, length: $stateParams.length, mulitline: $stateParams.mulitline, required: $stateParams.required};

			$scope.getUserInfo = function() {
	      UserService.getUserInfo(function(result) {
	        $scope.userInfo = result.data;
	      }, function() {
	        HnaAlert.default('获取用户信息出错！');
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

				UserService.setUserProfile({
					nickName: $scope.userInfo.nickName,
					company: $scope.userInfo.company,
					hobby: $scope.userInfo.hobby,
					speciality: $scope.userInfo.speciality
				}).success(function(result){
					if(result.code == 0) {
						//HnaAlert.default('用户信息更新成功！');
						$ionicHistory.goBack();
					}
					else{
						HnaAlert.default('用户信息更新失败！');
					}
				}).error(function(error){
					HnaAlert.default('用户信息更新失败！');
				})
      }

			$scope.getUserInfo();
	})
