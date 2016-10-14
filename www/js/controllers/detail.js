angular.module('starter.controllers')

  .controller('DetailCtrl', function ($scope, $stateParams, $state, $ionicHistory, $http, $location, $ionicPopup, Services, PageService) {

    var _pageName = $stateParams.pageName;
    var _projectId = $stateParams.projectid;
    var _userId = localStorage.userId;

    //获取用户信息
    $scope.getUserInfo = function () {
      $http.get(Services.getUrl("/api/user?userId=" + _userId)).success(function (result) {
        $scope.userinfo = result.data;
      });
    }

    $scope.isCurrentUser = false;

    $scope.getUserInfo();


    //项目详情
    $scope.getProjectDetail = function () {
      $http.get(Services.getUrl("/api/projects/" + _projectId + "")).success(function (result) {
        $scope.detail = result.data;

        // set title
        PageService.setTitle($scope.detail.name);
        // PageService.setSeo($scope.detail.name, $scope.detail.description);

        $scope.isCurrentUser = $scope.detail.creator.id === _userId ? true : false;
        //share
        /* http://a.vpimg3.com/upload/merchandise/pdc/220/233/8239185494233220/0/TW7C567-10-3_95x120_90.jpg   */
        $scope.imageUrls = result.data.images;
        $scope.shareUrl = encodeURIComponent($location.absUrl());
      });
    }
    $scope.getProjectDetail();

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

    // rich editor
    var quill = new Quill('#detail-introduction-container', {
      modules: {
        toolbar: []
      },
      theme: 'snow' // or 'bubble'
    });
    quill.setContents(JSON.parse(localStorage.getItem('contents-' + _projectId)));

    var myPopup;
    $scope.like = function (item) {
      if (item.like == true) {
        $http({
          method: "POST",
          url: Services.getUrl("/api/user/likeProject?projectId=" + item.id + "&add=false")
        }).success(function (result) {
          $scope.getProjectDetail();
        })
      } else {
        $http({
          method: "POST",
          url: Services.getUrl("/api/user/likeProject?projectId=" + item.id + "&add=true")
        }).success(function (result) {
          $scope.getProjectDetail();
        })
      }
    }
    $scope.favorite = function (item) {
      if (item.favorite == true) {
        $http({
          method: "POST",
          url: Services.getUrl("/api/user/favoriteProject?projectId=" + item.id + "&add=false")
        }).success(function (result) {
          $scope.getProjectDetail();
        })
      } else {
        $http({
          method: "POST",
          url: Services.getUrl("/api/user/favoriteProject?projectId=" + item.id + "&add=true")
        }).success(function (result) {
          $scope.getProjectDetail();
        })
      }
    }

    $scope.goBack = function(){
      if(_pageName){
        $state.go(_pageName)
      }
      else{
        $ionicHistory.goBack();
      }
    }
  })
