angular.module('starter', [
    'ionic',
    'starter.controllers',
    'starter.services',
    'angularValidator',
    'ionic.closePopup',
    'ngCookies',
    'pascalprecht.translate',
    'configuration',
    'ngFileUpload'
    ]);

angular.module('configuration', []);

angular.module('starter.controllers', []);

angular.module('starter.services', []);

angular.module('starter')

  .run(function ($ionicPlatform, $rootScope, AuthEvent, AuthService) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    // Handle access control globally.
    $rootScope.$on('$stateChangeStart', function (event, next, toParams, fromState, fromParams) {
      if( !next.data ) return;
      var isAuthRequired = next.data.requireAuth;

      if ( isAuthRequired && !localStorage.userId) {
        event.preventDefault();
        $rootScope.$broadcast(AuthEvent.NOT_AUTHENTICATED);
      }
    });
  });
