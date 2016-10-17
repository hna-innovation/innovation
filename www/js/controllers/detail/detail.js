angular.module('starter.controllers')

  .controller('DetailCtrl', function ($scope, $stateParams, $state, $ionicHistory, $http, $location, $ionicPopup, Services, PageService, Api, DetailService, $ionicLoading, UserService, UtilityService) {

    var _pageName = $stateParams.pageName;
    var _projectId = $stateParams.projectId;
    var _userId = localStorage.userId;

    $scope.isCurrentUser = false;

    function setLocalStorageWithDetailTab(projectId, content, type) {
      localStorage.setItem(type + '-' + projectId, content ? content : '');
    }

    //项目详情
    $scope.getProjectDetail = function () {
      DetailService.getProjectDetail(_projectId, function (result) {
        $scope.detail = result.data;

        // Set title with Hack
        PageService.setTitle($scope.detail.name);

        $scope.isCurrentUser = $scope.detail.creator.id === _userId ? true : false;

        //share
        $scope.imageUrls = result.data.images;
        $scope.shareUrl = encodeURIComponent($location.absUrl());

        if ($scope.detail.introduction) {
          document.querySelector('#detail-introduction-container').innerHTML = $scope.detail.introduction;
        }

        setLocalStorageWithDetailTab(_projectId, $scope.detail.introduction, 'introduction');
        setLocalStorageWithDetailTab(_projectId, $scope.detail.resourceRequired, 'resource');
        setLocalStorageWithDetailTab(_projectId, $scope.detail.marketAnalysis, 'market');
        setLocalStorageWithDetailTab(_projectId, $scope.detail.businessModel, 'business');

        $scope.members = $scope.detail.members;

        $scope.isProjectUser = !$scope.members.length ? false : $scope.members.filter(function (elem) {
          return elem.id === _userId;
        }).length ? true : false;

        $ionicLoading.hide();
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

    setTimeout(function () {
      Swiper('#swiper1', {
        direction: 'horizontal',
        loop: false,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationType: "fraction"
      })
    }, 1000)

    setTimeout(function () {
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

    $scope.goBack = function () {
      if (_pageName) {
        $state.go(_pageName)
      }
      else {
        $ionicHistory.goBack();
      }
    }
  })
