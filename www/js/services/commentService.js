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

      getProjectComments: function(offset, productId, success, error) {

        return $http.get(getUrl(Api.PROJECT_COMMENT_API + '/' + productId + '/comments?sort=createdDate,desc&page='+ offset +'&size=20'))
          .success(success)
          .error(error);
      },

      getUserComments: function(offset, success, error) {

        return $http.get(getUrl(Api.USER_COMMENTS_API + '?sort=createdDate,desc&page='+ offset +'&size=20'))
          .success(success)
          .error(error);

      },

      getUserReceivedComments: function(offset, success, error) {

        return $http.get(getUrl(Api.USER_RECEIVED_COMMENTS_API + '?sort=createdDate,desc&page='+ offset +'&size=20'))
          .success(success)
          .error(error);

      },

      getUserMessages: function(offset, success, error) {

        return $http.get(getUrl(Api.USER_MESSAGES_API + '?sort=createdDate,desc&page='+ offset +'&size=20'))
          .success(success)
          .error(error);

      }

    }
  });
