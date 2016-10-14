angular.module('starter.services')
  .factory('LoginService', function ($http, HelperService) {
    return {
      login: function(data, success) {
      return $http.post(HelperService.getUrl('/api/user/login'), data)
        .success(success);
    },
      register: function (data, success) {
      return $http.post(HelperService.getUrl('/api/user/register'), data)
        .success(success);
    }
    };
  });
