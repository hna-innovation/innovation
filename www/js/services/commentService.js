angular.module('starter.services')
  .factory('CommentService', function($http, LOCAL_TEST_URL, Api, HnaAlert, Content) {
    'use strict';

    function getUrl(api) {
      return LOCAL_TEST_URL + api;
    }

    return {
      getUrl: getUrl,

      add: function(comment, success, error) {
        
        if ( !comment || !comment.content ) {
            HnaAlert.default(Content.comment.ERROR_MESSAGE_EMPTY);
            return;
        }

        // TODO Integration
        // return $http.get(getUrl(Api.SEARCH_API + '?name=' + keyword + '&page=0&size=8'))
        //   .success(success)
        //   .error(error);
      }
    }
  });