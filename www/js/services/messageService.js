angular.module('starter.services')
  .factory('MessageService', function($http, HelperService, Api, HnaAlert, Content) {
    'use strict';

    return {
      addUserMessage: function(comment, success, error) {
        return $http.post(HelperService.getUrl(Api.USER_MESSAGES_API), comment)
          .success(success)
          .error(error);
      },

      getUserMessages: function(offset, success, error) {

        return $http.get(HelperService.getUrl(Api.USER_MESSAGES_API + '?sort=createdDate,desc&page='+ offset +'&size=20'))
          .success(success)
          .error(error);

      }
    };
  });
