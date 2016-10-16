// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
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
    $rootScope.$on('$stateChangeStart', function (event, next) {
      if( !next.data ) return;
      var isAuthRequired = next.data.requireAuth;

      if ( isAuthRequired && !localStorage.userId) {
        event.preventDefault();
        $rootScope.$broadcast(AuthEvent.NOT_AUTHENTICATED);
      }
    });
  })

  .factory('httpInterceptor', ['$q', '$injector', 'HnaAlert', function ($q, $injector, HnaAlert) {
    var httpInterceptor = {
      'response': function (response) {
        if (response.data.code == 401) {
          var ModalServices = $injector.get('ModalServices');
          localStorage.removeItem('userId');
          ModalServices.showPopup();
          return $q.reject(response);
        } else if (response.status === 404) {
          alert("404!");
          return $q.reject(response);
        }
        return response;
      },
      'responseError': function (responseErr) {
        if (responseErr.status === 404) {
          HnaAlert.default('404,资源不存在！');
          return $q.reject(responseErr);
        } else if (responseErr.status === 504) {
          HnaAlert.default('请求超时！');
          return $q.reject(responseErr);
        }
        return responseErr;
      }
    }
    return httpInterceptor;
  }
  ])

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

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
        url: '/detail/:projectId/:pageName',
        cache: false,
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'

      })

      .state('explore-resources', {
        url: '/explore-resources',
        templateUrl: 'templates/resources/explore-resources.html',
        controller: 'ExploreResourcesCtrl'

      })

      .state('detail-edit-introduction', {
        url: '/detail-edit-introduction/:projectId',
        templateUrl: 'templates/detail/detail-edit-introduction.html',
        controller: 'DetailEditIntroductionCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('detail-edit-resource', {
        url: '/detail-edit-resource/:projectId',
        templateUrl: 'templates/detail/detail-edit-resource.html',
        controller: 'DetailEditResourceCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('detail-edit-market', {
        url: '/detail-edit-market/:projectId',
        templateUrl: 'templates/detail/detail-edit-market.html',
        controller: 'DetailEditMarketCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('detail-edit-business', {
        url: '/detail-edit-business/:projectId',
        templateUrl: 'templates/detail/detail-edit-business.html',
        controller: 'DetailEditBusinessCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('search', {
        url: '/search',
        cache: false,
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'

      })

      .state('detail-page-resource', {
        url: '/detail-page-resource',
        templateUrl: 'templates/resources/detail-page-resource.html',
        controller: 'DetailPageResourceCtrl'

      })

      .state('user', {
        url: '/user/:userid',
        cache: false,
        templateUrl: 'templates/user.html',
        controller: 'UserCtrl',
        data: {
          requireAuth: true
        }

      })

      .state('user-draft', {
        url: '/user-draft',
        cache: false,
        templateUrl: 'templates/user-draft.html',
        controller: 'UserDraftsCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('user-comment', {
        url: '/user-comment',
        cache: false,
        templateUrl: 'templates/user-comment.html',
        controller: 'UserCommentsCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('user-comment2', {
        url: '/user-comment2',
        cache: false,
        templateUrl: 'templates/user-comment2.html',
        controller: 'UserCtrl'

      })
      .state('user-like', {
        url: '/user-like',
        cache: false,
        templateUrl: 'templates/user-like.html',
        controller: 'UserLikedProjectsCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('user-favorite', {
        url: '/user-favorite',
        cache: false,
        templateUrl: 'templates/user-favorite.html',
        controller: 'UserFavoriteProjectsCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('user-resources', {
        url: '/user-resources',
        cache: false,
        templateUrl: 'templates/user-resources.html',
        controller: 'UserCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('user-edit', {
        url: '/user-edit',
        cache: false,
        templateUrl: 'templates/user-edit.html',
        controller: 'UserCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('user-edit-info', {
        url: '/user-edit-info',
        cache: false,
        params: {target:null, text: '', length: 0, mulitline:false, required: false},
        templateUrl: 'templates/user-edit-info.html',
        controller: 'UserEditCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('user-innovations', {
        url: '/user-innovations',
        cache: false,
        templateUrl: 'templates/user-innovations.html',
        controller: 'UserInnovationsCtrl',
        data: {
          requireAuth: true
        }

      })
      .state('lookuser', {
        url: '/lookuser',
        templateUrl: 'templates/lookuser.html',
        controller: 'LookUserCtrl'

      })
      .state('step-1', {
        url: '/step-1',
        cache: false,
        templateUrl: 'templates/step-1.html',
        controller: 'StepFirstCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('step-2', {
        url: '/step-2',
        cache: false,
        templateUrl: 'templates/step-2.html',
        controller: 'StepSecondCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('step-3', {
        url: '/step-3',
        cache: false,
        templateUrl: 'templates/step-3.html',
        controller: 'StepThirdCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('step-4', {
        url: '/step-4',
        cache: false,
        templateUrl: 'templates/step-4.html',
        controller: 'StepFourthCtrl',
        data: {
          requireAuth: true
        }
      })

      .state('popular-innovation', {
        url: '/popular-innovation',
        cache: false,
        templateUrl: 'templates/popular-innovation.html',
        controller: 'PopularInnovationCtrl'
      })

      .state('popular-resources', {
        url: '/popular-resources',
        cache: false,
        templateUrl: 'templates/resources/popular-resources.html',
        controller: 'PopularResourcesCtrl'
      })

      .state('last-innovation', {
        url: '/last-innovation',
        cache: false,
        templateUrl: 'templates/last-innovation.html',
        controller: 'LastInnovationCtrl'
      })

      .state('innovation-stars', {
        url: '/innovation-stars',
        cache: false,
        templateUrl: 'templates/list/innovation-stars.html',
        controller: 'InnovationStarsCtrl'
      })

      .state('detail-page-comments', {
        url: '/detail-page-comments/:projectid',
        cache: false,
        templateUrl: 'templates/comments/detail-page-comments.html',
        controller: 'DetailPageCommentsCtrl',
        data: {
          requireAuth: true
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/innovation');

    $httpProvider.interceptors.push('httpInterceptor');

  });
