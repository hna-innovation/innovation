angular.module('starter.services')
  .factory('UserService', UserService);

function UserService($http, LOCAL_TEST_URL, Api) {

  var userService = {};

  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }

  userService.getUserInfo = function(success, error) {
    return $http.get(getUrl(Api.USER_INFO_API))
      .success(success)
      .error(error);;
  }

  userService.getUserExtensionInfo = function(success, error) {
    return $http.get(getUrl(Api.USER_EXTENSION_INFO))
      .success(success)
      .error(error);
  }

  userService.getUserProjects = function(success, error) {
    return $http.get(getUrl(Api.USER_PROJECTS_API))
      .success(success)
      .error(error);
  }

  userService.getUserDrafts = function(success, error) {
    return $http.get(getUrl(Api.USER_DRAFTS_API))
      .success(success)
      .error(error);
  }

  return userService;
}