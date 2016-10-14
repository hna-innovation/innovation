angular.module('configuration')
  .constant('AuthEvent', {
    NOT_AUTHENTICATED: 'auth-not-authenticated',
    LOGOUT: 'auth-logout'
  });