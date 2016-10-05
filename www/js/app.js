// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter')

  .run(function ($ionicPlatform) {
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
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive

      .state('innovation', {
        url: '/innovation',
        templateUrl: 'templates/innovation.html',
        controller: 'InnovationCtrl'
      })

      .state('detail', {
        url: '/detail',
        cache: false,
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'

      })

      .state('resources', {
        url: '/resources',
        templateUrl: 'templates/resources.html',
        controller: 'resourcesCtrl'

      })

      .state('user', {
        url: '/user',
        templateUrl: 'templates/user.html',
        controller: 'UserCtrl'

      })

      .state('step-1', {
        url: '/step-1',
        cache: false,
        templateUrl: 'templates/step-1.html',
        controller: 'StepFirstCtrl'
      })
      
      .state('step-2', {
        url: '/step-2',
        cache: false,
        templateUrl: 'templates/step-2.html',
        controller: 'StepSecondCtrl'
      })

      .state('step-3', {
        url: '/step-3',
        cache: false,
        templateUrl: 'templates/step-3.html',
        controller: 'StepThirdCtrl'
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/innovation');

  });
