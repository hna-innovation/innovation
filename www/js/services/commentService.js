angular.module('starter.services')
  .factory('CommentService', function($http, LOCAL_TEST_URL, Api, HnaAlert, Content) {
    'use strict';

    function getUrl(api) {
      return LOCAL_TEST_URL + api;
    }

    return {
      getUrl: getUrl,

      addProjectComment: function(comment, success, error) {

        if (!comment || !comment.content) {
          HnaAlert.default(Content.comment.ERROR_MESSAGE_EMPTY);
          return;
        }

        return $http.post(getUrl(Api.USER_COMMENTS_API), comment)
          .success(success)
          .error(error);
      },

      getProjectComments: function(productId, success, error) {

        return $http.get(getUrl('/api/projects') + '/' + productId + '/comments')
          .success(success)
          .error(error);
      },

      getUserComments: function(success, error) {

        return $http.get(getUrl(Api.USER_COMMENTS_API))
          .success(success)
          .error(error);

      }

    }
  });