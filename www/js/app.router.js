angular
  .module('starter')
  .config(router);

function router($stateProvider, $urlRouterProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('innovation', {
    url: '/innovation',
    cache: false,
    templateUrl: 'templates/innovation.html',
    controller: 'InnovationCtrl'
  })

  .state('detail', {
    url: '/detail/:projectId/:pageName',
    cache: false,
    templateUrl: 'templates/detail.html',
    controller: 'DetailCtrl'

  })

  .state('banner-detail', {
    url: '/banner-detail',
    templateUrl: 'templates/banner-detail.html'
  })

  .state('explore-resources', {
    url: '/explore-resources',
    templateUrl: 'templates/resources/explore-resources.html',
    controller: 'ExploreResourcesCtrl'

  })

  .state('explore-resources.experts', {
    url: '/resources-experts',
    cache: true,
    templateUrl: 'templates/resources/resources-experts.html',
    controller: 'ExpertsResourcesCtrl'
  })

  .state('explore-resources.open', {
    url: '/resources-open',
    templateUrl: 'templates/resources/resources-open.html',
  })

  .state('explore-resources.incubation', {
    url: '/resources-incubation',
    templateUrl: 'templates/resources/resources-incubation.html',
    controller: 'IncubationResourcesCtrl'
  })

  .state('incubation-resource-detail', {
    url: '/incubation-resource-detail/:detailId',
    cache: true,
    templateUrl: 'templates/resources/incubation-resource-detail.html',
    controller: 'IncubationResourceDetailCtrl'
  })

  .state('resource-detail', {
    url: '/resource-detail',
    templateUrl: 'templates/resources/resource-detail.html',
  })

  .state('team-detail', {
    url: '/team-detail',
    templateUrl: 'templates/resources/team-detail.html',
  })

  .state('tech-resource-detail', {
    url: '/tech-resource-detail/:detailId',
    cache: true,
    templateUrl: 'templates/resources/tech-resource-detail.html',
    controller: 'TechResourceDetailCtrl'
  })

  .state('explore-resources.professors', {
    url: '/resources-professors',
    templateUrl: 'templates/resources/resources-professors.html',
  })

  .state('explore-resources.markets', {
    url: '/resources-markets',
    templateUrl: 'templates/resources/resources-markets.html',
  })

  .state('explore-resources.knowledges', {
    url: '/resources-knowledges',
    templateUrl: 'templates/resources/resources-knowledges.html'
  })

  .state('detail-edit-introduction', {
    url: '/detail-edit-introduction/:projectId/:parentPage',
    templateUrl: 'templates/detail/detail-edit-introduction.html',
    controller: 'DetailEditIntroductionCtrl',
    data: {
      requireAuth: true
    }
  })

  .state('detail-edit-resource', {
    url: '/detail-edit-resource/:projectId/:parentPage',
    templateUrl: 'templates/detail/detail-edit-resource.html',
    controller: 'DetailEditResourceCtrl',
    data: {
      requireAuth: true
    }
  })

  .state('detail-edit-market', {
    url: '/detail-edit-market/:projectId/:parentPage',
    templateUrl: 'templates/detail/detail-edit-market.html',
    controller: 'DetailEditMarketCtrl',
    data: {
      requireAuth: true
    }
  })

  .state('detail-edit-business', {
    url: '/detail-edit-business/:projectId/:parentPage',
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
    url: '/detail-page-resource/:detailId',
    cache: true,
    templateUrl: 'templates/resources/detail-page-resource.html',
    controller: 'DetailPageResourceCtrl'

  })

  .state('user', {
    url: '/user/:userid',
    cache: false,
    templateUrl: 'templates/user/user.html',
    controller: 'UserCtrl',
    data: {
      requireAuth: true
    }

  })

  .state('user-draft', {
      url: '/user-draft',
      cache: false,
      templateUrl: 'templates/user/user-draft.html',
      controller: 'UserDraftsCtrl',
      data: {
        requireAuth: true
      }

    })
    .state('user-comment', {
      url: '/user-comment',
      cache: false,
      templateUrl: 'templates/user/user-comment.html',
      controller: 'UserCommentsCtrl',
      data: {
        requireAuth: true
      }
    })

    .state('user-comment.received', {
      url: '/received',
      cache: true,
      templateUrl: 'templates/user/user-received-comments.html',
      controller: 'UserReceivedCommentsCtrl',
      data: {
        requireAuth: true
      }
    })

    .state('user-comment.sent', {
      url: '/sent',
      cache: true,
      templateUrl: 'templates/user/user-sent-comments.html',
      controller: 'UserSentCommentsCtrl',
      data: {
        requireAuth: true
      }
    })

    .state('user-messages', {
      url: '/user-messages',
      cache: true,
      templateUrl: 'templates/user/user-messages.html',
      controller: 'UserMessagesCtrl',
      data: {
        requireAuth: true
      }
    })

    .state('user-comment2', {
      url: '/user-comment2',
      cache: false,
      templateUrl: 'templates/user/user-comment2.html',
      controller: 'UserCtrl'

    })
    .state('user-like', {
      url: '/user-like',
      cache: false,
      templateUrl: 'templates/user/user-like.html',
      controller: 'UserLikedProjectsCtrl',
      data: {
        requireAuth: true
      }

    })
    .state('user-favorite', {
      url: '/user-favorite',
      cache: false,
      templateUrl: 'templates/user/user-favorite.html',
      controller: 'UserFavoriteProjectsCtrl',
      data: {
        requireAuth: true
      }

    })
    .state('user-resources', {
      url: '/user-resources',
      cache: false,
      templateUrl: 'templates/user/user-resources.html',
      controller: 'UserCtrl',
      data: {
        requireAuth: true
      }

    })
    .state('user-edit', {
      url: '/user-edit',
      cache: false,
      templateUrl: 'templates/user/user-edit.html',
      controller: 'UserCtrl',
      data: {
        requireAuth: true
      }

    })
    .state('user-edit-info', {
      url: '/user-edit-info/:target/:text/:length/:mulitline/:required',
      cache: false,
      params: { target: null, text: '', length: 0, mulitline: false, required: false },
      templateUrl: 'templates/user/user-edit-info.html',
      controller: 'UserEditCtrl',
      data: {
        requireAuth: true
      }
    })
    .state('user-edit-avator', {
      url: '/user-edit-avator',
      cache: false,
      templateUrl: 'templates/user/user-edit-avator.html',
      controller: 'UserEditAvatorCtrl',
      data: {
        requireAuth: true
      }
    })
    .state('user-innovations', {
      url: '/user-innovations',
      cache: false,
      templateUrl: 'templates/user/user-innovations.html',
      controller: 'UserInnovationsCtrl',
      data: {
        requireAuth: true
      }

    })
    .state('user-joined-innovations', {
      url: '/user-joined-innovations',
      cache: false,
      templateUrl: 'templates/user/user-joined-innovations.html',
      controller: 'UserJoinedInnovationsCtrl',
      data: {
        requireAuth: true
      }

    })
    .state('other-user', {
      url: '/other-user/:userId',
      templateUrl: 'templates/user/other-user.html',
      controller: 'OtherUserCtrl'

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
    url: '/step-3/:parentPage',
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
    cache: true,
    templateUrl: 'templates/popular-innovation.html',
    controller: 'PopularInnovationCtrl'
  })

  .state('popular-resources', {
    url: '/popular-resources',
    cache: true,
    templateUrl: 'templates/resources/popular-resources.html',
    controller: 'PopularResourcesCtrl'
  })

  .state('last-innovation', {
    url: '/last-innovation',
    cache: true,
    templateUrl: 'templates/last-innovation.html',
    controller: 'LastInnovationCtrl'
  })

  .state('innovation-stars', {
    url: '/innovation-stars',
    cache: true,
    templateUrl: 'templates/list/innovation-stars.html',
    controller: 'InnovationStarsCtrl'
  })

  .state('download-bim', {
    url: '/download-bim',
    cache: true,
    templateUrl: 'templates/static/download-bim.html',
    controller: 'DownloadBimCtrl'
  })

  .state('success-case', {
    url: '/success-case',
    cache: true,
    templateUrl: 'templates/static/success-case.html',
    controller: 'SuccessCaseCtrl'
  })

  .state('detail-page-comments', {
    url: '/detail-page-comments/:projectId/:parentPage',
    cache: false,
    templateUrl: 'templates/comments/detail-page-comments.html',
    controller: 'DetailPageCommentsCtrl',
    data: {
      requireAuth: true
    }
  })

  .state('reply-comment-edit', {
    url: '/reply-comment-edit/:projectId/:replyUser/:commentId',
    cache: true,
    templateUrl: 'templates/comments/reply-comment-edit.html',
    controller: 'ReplyCommentEditCtrl',
    data: {
      requireAuth: true
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/innovation');

  $httpProvider.interceptors.push('httpInterceptor');
}
