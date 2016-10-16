angular.module('starter.services')
  .factory('DetailService', ['$http', 'HelperService', 'Api', function ($http, HelperService, Api) {
    return {
      getProjectDetail: function (projectId, success, error) {
        return $http.get(HelperService.getUrl(Api.PROJECTS_API + '/' + projectId))
          .success(success)
          .error(error)
      },
      editDetailIntroduction: function (data, success, error) {
        return $http.put(HelperService.getUrl(Api.PROJECTS_API + '/' + data.projectId + '/introduction'), data.passData)
          .success(success)
          .error(error);
      },
      editDetailResource: function (data, success, error) {
        return $http.put(HelperService.getUrl(Api.PROJECTS_API + '/' + data.projectId + '/resourceRequired'), data.passData)
          .success(success)
          .error(error);
      },
      editDetailMarket: function (data, success, error) {
        return $http.put(HelperService.getUrl(Api.PROJECTS_API + '/' + data.projectId + '/marketAnalysis'), data.passData)
          .success(success)
          .error(error);
      },
      editDetailBusiness: function (data, success, error) {
        return $http.put(HelperService.getUrl(Api.PROJECTS_API + '/' + data.projectId + '/businessModel'), data.passData)
          .success(success)
          .error(error);
      },
    };
  }]);

