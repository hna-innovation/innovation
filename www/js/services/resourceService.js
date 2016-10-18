angular.module('starter.services')
  .factory('ResourceService', function($http, HelperService) {
    'use strict';

    return {
      clickLikeAdd: function (item) {
        item.hasLiked=true;
        item.likeCount++;
        // TODO Integration
        // return $http.post(getUrl(RESOURCE_API+'?resourceId=' + item.id + '&add=true'))
        //   .success(function () {
        //     item.like = true;
        //     item.likeCount++
        //   });
      },

      clickLikeCancle: function (item) {
        item.hasLiked=false;
        item.likeCount--;
        // TODO Integration
        // return $http.post(getUrl(RESOURCE_API+'?resourceId=' + item.id + '&add=false'))
        //   .success(function () {
        //     item.like = false;
        //     item.likeCount--
        //   });
      },
      clickFavoriteAdd: function (item) {
        item.hasFavorited=true;
        item.favoriteCount++;
        // TODO Integration
        // return $http.post(getUrl(RESOURCE_API+'?resourceId=' + item.id + '&add=true'))
        //   .success(function () {
        //     item.like = true;
        //     item.likeCount++
        //   });
      },

      clickFavoriteCancle: function (item) {
        item.hasFavorited=false;
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
