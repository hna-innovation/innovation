angular.module('starter.services')
  .factory('ProjectsService', ['$http', 'Api', 'HelperService', 'Page', function($http, Api, HelperService, Page) {
    'use strict';

    return {
      getProductsByOffset: function(offset, success, error) {
        return $http.get(HelperService.getUrl(Api.PROJECTS_API + '?sort=createDate,desc&page='+ offset +'&size='+Page.SIZE))
          .success(success)
          .error(error);
      }
    }
  }]);