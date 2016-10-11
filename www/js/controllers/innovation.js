angular.module('starter.controllers')

  .controller('InnovationCtrl', InnovationCtrl)

function InnovationCtrl($scope, $ionicScrollDelegate, Services, ModalServices, Page, $state) {


  // set title
  Page.setTitle('创新平台');

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
  Services.getProjects(function (data) {
    $scope.projects = data.data.content;
  }, function (error) {
    console.log(error);
  });

  $scope.showPopup = function () {
    if(isLogin()){
      $state.go('user', {userid: getUserId()});
    } else {
      ModalServices.showPopup();
    }

  }

  $scope.dianzi = function(){
    if(localStorage.userId){
      window.location.href = "/#/step-1"
    } else {
      $scope.showPopup();
    }
  };

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

  $scope.goLastInnovation = function() {
    $state.go('last-innovation');
  };

  $scope.goInnovationStars = function() {
    $state.go('innovation-stars');
  };

  Services.getTags(function (data) {
    $scope.tags = data.data;
  }, function () {

  });

  $scope.like = function(item) {
    if(item.like == true) {
      item.like = false;
      item.likeCount--;
      Services.clickLikeCancle(item.id);
    } else {
      item.like = true;
      item.likeCount++;
      Services.clickLikeAdd(item.id);
    }
  }
}
