angular.module('starter.services')
  .factory('HelperService', function(LOCAL_TEST_URL) {
    function getUrl(api) {
      return LOCAL_TEST_URL + api;
    }
    return {
      getUrl: getUrl
    }
  });
