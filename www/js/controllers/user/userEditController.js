angular.module('starter.controllers')

	.controller('UserEditCtrl', function($scope, $stateParams, HnaAlert, $ionicHistory, $location, $ionicPopup, $state, UserService, Content, $ionicViewSwitcher) {
      $scope.info = {target: $stateParams.target, text: $stateParams.text, length: $stateParams.length, mulitline: $stateParams.mulitline, required: $stateParams.required};

			$scope.getUserInfo = function() {
	      UserService.getUserInfo(function(result) {
	        $scope.userInfo = result.data;
	      }, function() {
          //出错信息统一在app.js处理,包括错误码401、404、504
          // HnaAlert.default(Content.user.LOAD_DATA_ERROR);
	      });
	    }

      $scope.cancel = function() {
        $ionicViewSwitcher.nextDirection('back');
        $state.go('user-edit');
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
            $ionicViewSwitcher.nextDirection('back');
            $state.go('user-edit', {}, {reload: true});

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
