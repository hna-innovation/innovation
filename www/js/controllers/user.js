angular.module('starter.controllers')

	.controller('UserCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, Services) {
			
			
//			var _userId = $location.search()['userid'];
			var _baseUrl = "http://172.16.2.7:8080";
			
			var _userId = "57c96c19d9f2822078df18b9";
			
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
				$http.get(_baseUrl+"/api/user?userId="+_userId).success(function(result){			
						$scope.userinfo=result.data;	
				});	
			}
			$scope.getUserInfo();

//			$http({
//				method:"POST",
//				url:_baseUrl+"/api/user/likeProject?projectId="+item.id+"&add=true"
//			}).success(function(result){			
//				$scope.getProjectDetail();
//			})					
	

	})