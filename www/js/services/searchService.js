angular.module('starter.services')
	.factory('SearchService', function($http, LOCAL_TEST_URL, Api) {
	    'use strict';

	    function getUrl(api) {
			return LOCAL_TEST_URL + api;
		}

	    return {
	        getUrl: getUrl,

	        getProducts: function(keyword, success, error) {
	            return $http.get(getUrl(Api.SEARCH_API + '?name=' +keyword+ '&page=0&size=8'))
	                .success(success)
	                .error(error);	
	        }
	    }
	});