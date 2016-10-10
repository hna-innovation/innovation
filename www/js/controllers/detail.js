angular.module('starter.controllers')

	.controller('DetailCtrl', function($scope, $stateParams, $http, $location, $ionicPopup, Services) {
			
			$scope.pageName = $location.search()['pageName'];
			var _projectId = $location.search()['projectid'];
			var _baseUrl = "";
			// var _baseUrl = "http://172.16.2.7:8080";			
			var _userId = "57c96c19d9f2822078df18b9";
			
			//获取用户信息
			$scope.getUserInfo = function(){				
				$http.get(_baseUrl+"/api/user?userId="+_userId).success(function(result){			
						$scope.userinfo=result.data;	
				});	
			}
			$scope.getUserInfo();

			//项目详情
			$scope.getProjectDetail = function(){
				$http.get( _baseUrl + "/api/project/info/"+_projectId+"").success(function(result){
					$scope.detail = result.data;
					
					//share
					/* http://a.vpimg3.com/upload/merchandise/pdc/220/233/8239185494233220/0/TW7C567-10-3_95x120_90.jpg   */
					$scope.imageUrls = encodeURIComponent(result.data.imageUrls[0]);
					$scope.shareUrl = encodeURIComponent($location.absUrl());					
					console.log(result)
				});
			}
			$scope.getProjectDetail();
			

			setTimeout(function(){
			   Swiper('#swiper1', {
				    direction: 'horizontal',
				    loop: true,	
				    autoplay: 0,
				    autoplayDisableOnInteraction: false,
				    pagination: '.swiper-pagination',
				    paginationType: "fraction"
				})				
			},1000)

			setTimeout(function(){
				Swiper('#swiper2', {
				    direction: 'horizontal',
				    loop: true,	
				    autoplay: 0,
				    pagination: '.tab-nav',
					paginationClickable: true,
					paginationBulletRender: function (index,tag) {
						var tag = [
						   	{name:"创意介绍"},
							{name:"市场分析"},
							{name:"商业模式"},
							{name:"资源需求"}
						]
						return "	<li class='swiper-pagination-bullet'><span>"+tag[index].name+"</span></li>"
					},
					onSlideChangeEnd: function(swiper){
						var obj = angular.element(document.getElementById("swiper2-nav")).find("li");
						var index = swiper.activeIndex;
						if(index==(obj.length+1)){
							index=1;
						}else if(index==0){
							index = obj.length;
						}
						index--;
						obj.removeClass("active");
						obj.eq(index).addClass("active");					    		
					}
				}) 
			},1000)	
			
			
			var myPopup;
			$scope.like = function(item){
				if(item.like==true){
					$http({
						method:"POST",
						url:_baseUrl+"/api/user/likeProject?projectId="+item.id+"&add=false"
					}).success(function(result){	
						$scope.getProjectDetail();
					})
				}else{
					$http({
						method:"POST",
						url:_baseUrl+"/api/user/likeProject?projectId="+item.id+"&add=true"
					}).success(function(result){			
						$scope.getProjectDetail();
					})					
				}	
			}
			$scope.favorite = function(item){
				if(item.favorite==true){
					$http({
						method:"POST",
						url:_baseUrl+"/api/user/favoriteProject?projectId="+item.id+"&add=false"
					}).success(function(result){	
						$scope.getProjectDetail();
					})
				}else{
					$http({
						method:"POST",
						url:_baseUrl+"/api/user/favoriteProject?projectId="+item.id+"&add=true"
					}).success(function(result){			
						$scope.getProjectDetail();
					})					
				}	
			}
			

	})