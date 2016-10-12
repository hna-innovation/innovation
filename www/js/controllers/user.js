angular.module('starter.controllers')

	.controller('UserCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, $state, Services) {

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


			var userInfoConfig = {
				name: {
					text: '姓名',
					length: 10
				},
				company: {
					text: '公司',
					length: 20
				},
				interest: {
					text: '兴趣',
					length: 20
				},
				skill: {
					text: '特长',
					length: 20
				}
			}

			$scope.goEditUserInfo = function(target) {
				$state.go('user-edit-info', userInfoConfig[target])
			}

			$scope.getUserInfo();
	})
