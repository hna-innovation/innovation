angular.module('starter.controllers')
  .controller('InnovationCtrl', [
      '$scope',
      '$ionicScrollDelegate',
      '$translate',
      'Services',
      'PageService',
      '$state',
      'ProjectsService',
      'UtilityService',
      'ModalServices',
      'Content',
      '$ionicViewSwitcher',
      '$ionicLoading',
      function ($scope, $ionicScrollDelegate, $translate, Services, PageService, $state, ProjectsService, UtilityService, ModalServices, Content, $ionicViewSwitcher, $ionicLoading) {
        $ionicLoading.hide();

        // set title
        PageService.setTitle('创新平台');
        $scope.isLogin = isLogin;

        $scope.userHeaderIcon = localStorage.userHeaderIcon;

        function isLogin() {
          return localStorage.userId ? true : false;
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
        $scope.hasMoreData = true;

        var getProductsByOffset = function() {
          var offset = 0;

          return function(){
            ProjectsService.getProductsByOffset(offset, function (data) {

              if(data && data.data && data.data.content && data.data.content.length){
                $scope.projects = UtilityService.concatArray($scope.projects, data.data.content);
                $scope.$broadcast('scroll.infiniteScrollComplete');
              } else {
                $scope.attentionMsg = Content.EMPTY_CONTENT;
                $scope.hasMoreData = false;
              }

            }, function (error) {
              $scope.attentionMsg = Content.TIME_OUT;
              $scope.hasMoreData = false;
            });

            offset++;
          };
        };

        $scope.getProjects = getProductsByOffset();
        $scope.getProjects();

        // personal like slide
        $scope.slideStatus = false;
        $scope.slideUpInterest = function () {
          if(!isLogin()) {
            ModalServices.showPopup();
            return;
          }
          $scope.slideStatus = true;
        };
        $scope.slideDownInterest = function () {
          $ionicScrollDelegate.scrollTop();
          $scope.slideStatus = false;
        };

        $scope.saveInterest = function () {
          var tags = [];
          $scope.tags.filter(function (elem) {
            return elem.status === true;
          }).map(function (elem) {
            tags.push(elem.id);
          });

          Services.setUserTags({tags: tags}, function (data) {
            $scope.slideDownInterest();
            $scope.projects = [];
            $scope.hasMoreData = true;
            $scope.getProjects = getProductsByOffset();
            $scope.getProjects();
          }, function (error) {
            console.log(error);
          });
        };

        $scope.goPopularInnovation = function() {
          $ionicViewSwitcher.nextDirection('forward');
          $state.go('popular-innovation');
        };

        $scope.goPopularResources = function() {
          $state.go('popular-resources');
          $ionicViewSwitcher.nextDirection('forward');
        };

        $scope.goLastInnovation = function() {
          $state.go('last-innovation');
          $ionicViewSwitcher.nextDirection("forward");
        };

        $scope.goInnovationStars = function() {
          $state.go('innovation-stars');
          $ionicViewSwitcher.nextDirection("forward");
        };

        Services.getTags(function (data) {
          if(isLogin()) {
            Services.getUserTags().success(function(userTags){
              if(userTags && userTags.data){
                data.data.forEach(function(tag){
                  userTags.data.forEach(function(userTag){
                    if(tag.id == userTag){
                      tag.status = true;
                    }
                  })
                })
              }
            })
          }
          $scope.tags = data.data;
        }, function () {
        });
      }]
  );
