angular.module('starter.services')
  .factory('CacheService', function () {
    'use strict';
    var introduction = '';
    var market = '';
    var resource = '';
    var bussiness = '';
    return {
      getIntroductionOfDetail: function () {
        return introduction;
      },
      setIntroduction: function (newIntroduction) {
        introduction = newIntroduction;
      },
      getMarketOfDetail: function () {
        return market;
      },
      setMarket: function (newMarket) {
        market = newMarket;
      },
      getResourceOfDetail: function () {
        return resource;
      },
      setResource: function (newResource) {
        resource = newResource;
      },
      getBussinessOfDetail: function () {
        return bussiness;
      },
      setBussiness: function (newBussiness) {
        bussiness = newBussiness;
      }
    }
  });
