angular.module('starter.controllers')
  .controller('InnovationCtrl', [
      '$scope',
      '$ionicScrollDelegate',
      'Services',
      'ModalServices',
      'PageService',
      '$state',
      'ProjectsService',
      'UtilityService',
      'Content',
      function ($scope, $ionicScrollDelegate, Services, ModalServices, PageService, $state, ProjectsService, UtilityService, Content) {

        // set title
        PageService.setTitle('创新平台');
        // PageService.setDescription('创新平台');

        function isLogin() {
          return localStorage.userId ? true : false;
        }

        function getUserId() {
          return localStorage.userId;
        }

        // init banner carousel
        new Swiper('.swiper-container', {
          // Optional parameters
          autoplay: 2000,
          autoplayDisableOnInteraction: false,//false的话用户操作后还会继续轮播，否则中断
          loop: true,
          pagination: '.swiper-pagination'
        });

        // Get Projects

        $scope.projects = [];
        $scope.hasMoreData = function () {
          return true;
        }
        function getProductsByOffset(offset) {
          ProjectsService.getProductsByOffset(offset, function (data) {
            if(data.data.content && data.data.content.length){
              $scope.projects = UtilityService.concatArray($scope.projects, data.data.content);
              $scope.$broadcast('scroll.infiniteScrollComplete');
            } else {
              $scope.attentionMsg = Content.EMPTY_CONTENT;
              $scope.hasMoreData = false;
            }

          }, function (error) {
            $scope.attentionMsg = Content.TIME_OUT;
            $scope.hasMoreData = false;
            console.log(error);
          });
        }
        var offset = 0;
        $scope.loadMore = function () {
          getProductsByOffset(offset);
          offset++;
        };

        $scope.showPopup = function () {
          if (isLogin()) {
            $state.go('user', {userid: getUserId()});
          } else {
            ModalServices.showPopup();
          }
        }

        // personal like slide
        $scope.slideStatus = false;
        $scope.slideUpInterest = function () {
          $scope.slideStatus = true;
        };
        $scope.slideDownInterest = function () {
          $scope.slideStatus = false;
        };
        $scope.saveInterest = function () {
          var tags = [];
          $scope.tags.filter(function (elem) {
            return elem.status === true;
          }).map(function (elem) {
            tags.push(elem.id);
          });
          Services.getProjectsByTags(tags.join(','), function (data) {
            console.log(data);
            $scope.projects = data.data.content;
            $scope.slideDownInterest();
            $ionicScrollDelegate.scrollTop();
          }, function (error) {
            console.log(error);
          });
        };

        $scope.goPopularInnovation = function() {
          $state.go('popular-innovation');
        };

        $scope.goPopularResources = function() {
          $state.go('popular-resources');
        };

        $scope.goLastInnovation = function() {
          $state.go('last-innovation');
        };

        $scope.goInnovationStars = function() {
          $state.go('innovation-stars');
        };

        $scope.like = function(item) {
          item.like ? Services.clickLikeCancle(item) : Services.clickLikeAdd(item);
        }

        Services.getTags(function (data) {
          $scope.tags = data.data;
        }, function () {

        });

      }]
  );
