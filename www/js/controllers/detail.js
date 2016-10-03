angular.module('starter.controllers')

	.controller('DetailCtrl', function($scope, $stateParams) {

		   var mySwiper1 = new Swiper ('#swiper1', {
				    direction: 'horizontal',
				    loop: true,
				    autoplay: 0,
				    autoplayDisableOnInteraction: false,
				    // 如果需要分页器
				    pagination: '.swiper-pagination',
				    paginationType: "fraction"

			})

		   var mySwiper2 = new Swiper ('#swiper2', {
				    direction: 'horizontal',
				    loop: true,
				    autoplay: 0,
				    pagination: '.tab-nav',
					paginationClickable: true,
					paginationBulletRender: function (index,tag) {
						var tag = [
						   	{name:"提案介绍"},
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
	})
