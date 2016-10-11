angular.module('starter.services')
  .factory('UtilityService', function() {
    return {
      concatArray: function (arrA, arrB) {
        return Array.prototype.concat.apply(arrA, arrB);
      }
    }
  });

