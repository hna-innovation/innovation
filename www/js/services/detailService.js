angular.module('starter.services')
  .factory('DetailService', ['$http', 'HelperService', 'Api', function ($http, HelperService, Api) {
    return {

      editDetailIntroduction: function(data, success, error) {
        return $http.put(HelperService.getUrl(Api.PROJECTS_API+'/'+data.projectId+'/introduction'), data.passData)
          .success(success)
          .error(error);
      }
    };
  }]);

