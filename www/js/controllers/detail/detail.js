angular.module('starter.controllers')

  .controller('DetailCtrl', function ($scope, $rootScope, $stateParams, $state, $ionicHistory, $http, $location, $ionicPopup, Services, PageService, Api, DetailService, $ionicLoading, UserService, UtilityService, HnaAlert, ProjectsService, Content, mobileTypeDetectService, CacheService, $timeout, $window) {

    var _pageName = $stateParams.pageName;
    var _projectId = $stateParams.projectId;
    var _userId = localStorage.userId;

    $scope.isCurrentUser = false;

    // rich editor
    new Quill('#detail-introduction-container', {
      modules: {
        toolbar: []
      },
      theme: 'snow' // or 'bubble'
    });

    //项目详情
    $scope.getProjectDetail = function () {
      DetailService.getProjectDetail(_projectId, function (result) {
        $ionicLoading.hide();

        $scope.detail = result.data;

        // Set title with Hack
        PageService.setTitle($scope.detail.name);

        $scope.isCurrentUser = $scope.detail.creator.id === _userId ? true : false;

        //share
        $scope.imageUrls = result.data.images;
        $scope.shareUrl = encodeURIComponent($location.absUrl());

        if ($scope.detail.introduction) {
          angular.element(document.querySelector('#detail-introduction-container .ql-editor')).append($scope.detail.introduction);
          // document.querySelector('#detail-introduction-container').innerHTML = $scope.detail.introduction;
        }

        CacheService.setIntroduction($scope.detail.introduction);
        CacheService.setMarket($scope.detail.marketAnalysis);
        CacheService.setBussiness($scope.detail.businessModel);
        CacheService.setResource($scope.detail.resourceRequired);

        $scope.members = $scope.detail.members;

        $scope.isProjectUser = !$scope.members.length ? false : $scope.members.filter(function (elem) {
          return elem.id === _userId;
        }).length ? true : false;

      }, function () {
        $ionicLoading.hide();
      });
    }
    $scope.getProjectDetail();
    $ionicLoading.show();

    $scope.joinProject = function () {
      UserService.joinProject(_projectId, function (data) {
        $scope.getProjectDetail();
      }, function () {

      })
    }

    $timeout(function () {
      Swiper('#swiper1', {
        direction: 'horizontal',
        loop: false,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationType: "fraction"
      })
    }, 1000)

    $timeout(function () {
      Swiper('#swiper2', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        pagination: '.tab-nav',
        paginationClickable: true,
        paginationBulletRender: function (index, tag) {
          var tag = [{
            name: "创意介绍"
          }, {
            name: "市场分析"
          }, {
            name: "商业模式"
          }, {
            name: "资源需求"
          }]
          return "	<li class='swiper-pagination-bullet'><span>" + tag[index].name + "</span></li>"
        },
        onSlideChangeEnd: function (swiper) {
          var obj = angular.element(document.getElementById("swiper2-nav")).find("li");
          var index = swiper.activeIndex;
          if (index == (obj.length + 1)) {
            index = 1;
          } else if (index == 0) {
            index = obj.length;
          }
          index--;
          obj.removeClass("active");
          obj.eq(index).addClass("active");
        }
      })
    }, 1000);


    $scope.hasLiked = function (item) {
      if (item.hasLiked) {
        Services.clickLikeCancle(item.id, function () {
          $scope.getProjectDetail();
        });
      } else {
        Services.clickLikeAdd(item.id, function () {
          $scope.getProjectDetail();
        });
      }
    }

    $scope.hasFavorited = function (item) {
      if (item.hasFavorited) {
        Services.clickFavoriteCancle(item.id, function () {
          $scope.getProjectDetail();
        });
      } else {
        Services.clickFavoriteAdd(item.id, function () {
          $scope.getProjectDetail();
        });
      }
    }

    $scope.generateBPPdf = function (item) {
      ProjectsService.getProjectBPPdf(item.id, function (result) {
        if (result) {
          var file = new Blob([result], {type: 'application/pdf'});
          saveAs(file, "BP计划书.pdf");
        } else {
          HnaAlert.default(Content.project.ERROR_MESSAGE_PDF);
        }
      }, function () {
        HnaAlert.default(Content.project.ERROR_MESSAGE_PDF);
      });
    }

    $scope.goBack = function () {
      var backView = $ionicHistory.backView();

      if(backView) {
          $state.go(backView.stateName);
      } else {
        HnaAlert.default('操作有误, 将跳转回首页!');
        $state.go('innovation');
      }
    }

  })
