angular.module('starter.resources', [])

	.controller('resourcesCtrl', function($scope, $stateParams) {
		   var mySwiper3 = new Swiper ('#swiper-container', {
				    direction: 'horizontal',
				    loop: true,	
				    autoplay: 0,
				    pagination: '.tab-nav',
					paginationClickable: true,
					paginationBulletRender: function (index,tag) {
						var tag = [
						   	{name:"资源介绍"},
							{name:"创业导师"}
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
	})