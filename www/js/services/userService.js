angular.module('starter.services')
  .factory('UserService', UserService);

function UserService($http, LOCAL_TEST_URL, Api, Page) {

  var userService = {};

  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }

  userService.getUserInfo = function(success, error) {
    return $http.get(getUrl(Api.USER_INFO_API))
      .success(success)
      .error(error);
  }

  userService.getUserExtensionInfo = function(success, error) {
    return $http.get(getUrl(Api.USER_EXTENSION_INFO))
      .success(success)
      .error(error);
  }

  userService.getUserProjects = function() {
    return $http.get(getUrl(Api.USER_PROJECTS_API));
  }

  userService.getUserDrafts = function(success, error) {
    return $http.get(getUrl(Api.USER_DRAFTS_API))
      .success(success)
      .error(error);
  }

  userService.getInnovationStarUsers = function(success, error) {
    return $http.get(getUrl(Api.USER_INNOVATION_STARS_API))
      .success(success)
      .error(error);
  }

  userService.getUserLikedProjects = function(success, error) {

    return $http.get(getUrl(Api.USER_LIKED_PROJECTS_API))
      .success(success)
      .error(error);
  }

  userService.getUserFavoriteProjects = function(offset, success, error) {

    return $http.get(getUrl(Api.USER_FAVORITE_PROJECTS_API + '?page='+ offset + '&size=5'))
      .success(success)
      .error(error);
  }

  userService.setUserLikedRead = function() {

    return $http.post(getUrl(Api.USER_LIKED_STATUS_READ));
  }

  userService.setUserProfile = function(data) {

    return $http.put(getUrl(Api.USER_INFO_API), data)
  }

  userService.joinProject = function (projectId, success, error) {
    return $http.post(getUrl(Api.USER_JOIN_PROJECT + '/' + projectId))
      .success(success)
      .error(error);
  }

  userService.joinedProject = function () {
    return $http.get(getUrl(Api.USER_JOIN_PROJECT))
  }

  userService.checkSession = function (success, error) {
    return $http.get(getUrl('/api/user/session/status'))
      .success(success)
      .error(error);
  }

  userService.getOtherUserResume = function (userID, success, error) {
    return $http.get(getUrl('/api/user/' + userID + '/resume'))
      .success(success)
      .error(error);
  }

  return userService;
}
