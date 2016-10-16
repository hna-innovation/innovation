angular.module('starter.services')
  .factory('UserLikedService', function($http, Content, HelperService) {
    'use strict';

    return {
      getUserLikedProjects: function(success, error) {

        return $http.get(HelperService.getUrl('api/user/userLikedProjects'))
          .success(success)
          .error(error);
      }
    }
  });
