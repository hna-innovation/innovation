angular.module('starter.services')

.factory('Services', Services)

.directive("hnaFooternav", function () {
    return {
        restrict: "EAC",
        replace: true,
        transclude: false,
        link: function (scope, element) {
        		var html = '<ul class="detail-footer-nav">';
        			html+=    '<li><i class="if i-collect"></i></li>';
        			html+=    '<li><i class="if i-star"></i></li>';
        			html+=    '<li><i class="if i-xiaoxi"></i></li>';
        			html+=    '<li><i class="if i-fenxiang"></i></li>';
        			html+= '</ul>';
        		element.append(html);
		}
	}
})


function Services($http, LOCAL_TEST_URL) {

  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }
  return {

    //get all projects
    getProjects: function(success, error) {
      return $http.get(getUrl('/api/show/project'))
        .success(success)
        .error(error);
    },

    //login
    login: function (data, success, error) {
      return $http.post(getUrl('/api/login'), data)
        .success(success)
        .error(error)
    },

    //register
    register: function (data, success, error) {
      return $http.post(getUrl('/api/reg'), data)
        .success(success)
        .error(error)
    }

  };
}
