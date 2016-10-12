angular.module('starter.services')
  .factory('AuthService', function() {
    'use strict';

    var authService = {};

    authService.isAuthenticated = function() {
      return !!localStorage.userId;
    };

    return authService;

  });