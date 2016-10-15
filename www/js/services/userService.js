angular.module('starter.services')
  .factory('UserService', UserService);

function UserService($http, LOCAL_TEST_URL, Api) {

  var userService = {};

  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }

  userService.getUserExtensionInfo = function(success, error) {
    return $http.get(getUrl(Api.USER_EXTENSION_INFO))
      .success(success)
      .error(error);
  }

  return userService;
}