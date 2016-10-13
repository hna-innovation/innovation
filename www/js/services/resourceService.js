angular.module('starter.services')
  .factory('ResourceService', function($http, HelperService) {
    'use strict';

    return {
      clickLikeAdd: function (item) {
        item.like=true;
        item.likeCount++;
        // TODO Integration
        // return $http.post(getUrl(RESOURCE_API+'?resourceId=' + item.id + '&add=true'))
        //   .success(function () {
        //     item.like = true;
        //     item.likeCount++
        //   });
      },

      clickLikeCancle: function (item) {
        item.like=false;
        item.likeCount--;
        // TODO Integration
        // return $http.post(getUrl(RESOURCE_API+'?resourceId=' + item.id + '&add=false'))
        //   .success(function () {
        //     item.like = false;
        //     item.likeCount--
        //   });
      },
      clickFavoriteAdd: function (item) {
        item.favorite=true;
        item.favoriteCount++;
        // TODO Integration
        // return $http.post(getUrl(RESOURCE_API+'?resourceId=' + item.id + '&add=true'))
        //   .success(function () {
        //     item.like = true;
        //     item.likeCount++
        //   });
      },

      clickFavoriteCancle: function (item) {
        item.favorite=false;
        item.favoriteCount--;
        // TODO Integration
        // return $http.post(getUrl(RESOURCE_API+'?resourceId=' + item.id + '&add=false'))
        //   .success(function () {
        //     item.like = false;
        //     item.likeCount--
        //   });
      }
    }
  });
