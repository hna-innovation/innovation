angular.module('starter.controllers')
  .controller('PopularResourcesCtrl', function($scope, $state, Content) {
    'use strict';

    $scope.resources = [
    	{
    		title: "创业导师资源",
    		avator: "../img/user/user.jpg",
    		ownedProductsCount: 5,
    		likeTotalCount: 3115
    	},
    	{
    		title: "创业服务",
    		avator: "../img/user/user.jpg",
    		ownedProductsCount: 5,
    		likeTotalCount: 3115
    	},
    	{
    		title: "孵化服务",
    		avator: "../img/user/user.jpg",
    		ownedProductsCount: 5,
    		likeTotalCount: 3115
    	},
    	{
    		title: "专访，特写服务",
    		avator: "../img/user/user.jpg",
    		ownedProductsCount: 5,
    		likeTotalCount: 3115
    	},
    	{
    		title: "敏捷实践指导",
    		avator: "../img/user/user.jpg",
    		ownedProductsCount: 5,
    		likeTotalCount: 3115
    	},
    	{
    		title: "敏捷工具平台",
    		avator: "../img/user/user.jpg",
    		ownedProductsCount: 5,
    		likeTotalCount: 3115
    	}
    ];

  });