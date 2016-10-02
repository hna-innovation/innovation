angular.module('starter.controllers', [])

	.controller('DetailCtrl', function($scope, $stateParams, Chats) {
	
		   var mySwiper = new Swiper ('.swiper-container', {
				    direction: 'horizontal',
				    loop: true,	
				    autoplay: 0,
				    autoplayDisableOnInteraction: false,    
				    // 如果需要分页器
				    pagination: '.swiper-pagination',
				    paginationType: "fraction"

			})    
	})