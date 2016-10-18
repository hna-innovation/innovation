angular.module('starter.services')
  .factory('ProjectsService', ['$http', 'Api', 'HelperService', 'Page', function($http, Api, HelperService, Page) {
    'use strict';

    return {
      getProductsByOffset: function(offset, success, error) {
        return $http.get(HelperService.getUrl(Api.PROJECTS_API + '/custom?sort=createdDate,desc&page='+ offset +'&size='+Page.SIZE))
          .success(success)
          .error(error);
      },
      getProductsByType: function(type, offset, success, error) {
        return $http.get(HelperService.getUrl(Api.PROJECTS_API + '/ordered?sort='+ type + ',desc&page='+ offset +'&size='+Page.SIZE))
          .success(success)
          .error(error);
      },
      getProductsBySearch: function(keyword, success, error) {
        return $http.get(HelperService.getUrl(Api.PROJECTS_API + '/search?query=' + keyword + '&page=0&size=8'))
          .success(success)
          .error(error);
      },
      getStateOfProducts: function (success, error) {
        return $http.get(HelperService.getUrl(Api.PROJECTS_API + '/state'))
          .success(success)
          .error(error)
      },
      getProjectBPPdf: function (projectId, success, error) {
        return $http.get(HelperService.getUrl(Api.PROJECT_BP_PDF_API + '/' + projectId + '/doc'), {responseType: 'arraybuffer'})
          .success(success)
          .error(error)
      }
    }
  }]);
