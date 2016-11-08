angular
  .module('starter')
  .config(configure)
  .factory('httpInterceptor', httpInterceptor);

function configure($translateProvider, LANGUAGE) {
  // Tell the module what language to use by default
  $translateProvider.preferredLanguage(LANGUAGE.preferredLanguage);
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.useCookieStorage();
}

function httpInterceptor($q, $injector, HnaAlert, $window, $rootScope, AuthEvent) {
  var _httpInterceptor = {
    'response': function(response) {
      if (response.data.code == 401) {

        if (localStorage.userId) {
          // $location.path('innovation');
          //Reload index after session timeout
          $window.location.href = '#/innovation';
          localStorage.removeItem('userId');

          HnaAlert.default('登录超时！请重新登录');
          $rootScope.ModalServices = $injector.get('ModalServices');
          $rootScope.ModalServices.showPopup();
        } else {
          $rootScope.$broadcast(AuthEvent.NOT_AUTHENTICATED);
        }

        return $q.reject(response);
      } else if (response.status === 404) {
        return $q.reject(response);
      }
      return response;
    },
    'responseError': function(responseErr) {
      if (responseErr.status === 404) {
        HnaAlert.default('404,资源不存在！');
        return $q.reject(responseErr);
      } else if (responseErr.status === 504) {
        //HnaAlert.default('请求超时！');
        return $q.reject(responseErr);
      }
      return responseErr;
    }
  };
  return _httpInterceptor;
}
