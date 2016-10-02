angular.module('starter.services')

.factory('Services', Services);

function Services($http, LOCAL_TEST_URL) {

  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }
  return {
    getProjects: function(success, error) {
      return $http.get(getUrl('/api/show/project'))
        .success(success)
        .error(error);
    }
  };
}
