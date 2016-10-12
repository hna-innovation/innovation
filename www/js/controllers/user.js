angular.module('starter.controllers')

	.controller('UserCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, Services) {

			var resourcesType = $location.search()['type'];

			$scope.getResources = function(){

			}

			if(resourcesType!=undefined){
				if(resourcesType==1){
					$scope.title = "支持的创意"
				}
				if(resourcesType==2){
					$scope.title = "支持的资源"
				}
				if(resourcesType==3){
					$scope.title = "收藏的创意"
				}
				if(resourcesType==4){
					$scope.title = "收藏的资源"
				}
			}

			//获取用户信息
			$scope.getUserInfo = function(){
				$http.get(Services.getUrl("/api/user?userId=" + localStorage.userId)).success(function(result){
						$scope.userinfo=result.data;
				});
			}

			$scope.getUserInfo();
	})
