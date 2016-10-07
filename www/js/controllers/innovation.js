angular.module('starter.controllers')

  .controller('InnovationCtrl', InnovationCtrl)

function InnovationCtrl($scope, Services, modalServices) {
  // init banner carousel
  new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: 2000,
    autoplayDisableOnInteraction: false,//false的话用户操作后还会继续轮播，否则中断
    loop: true
  });

  // Get Projects
  Services.getProjects(function (data) {
    $scope.projects = data.data.content;
  }, function (error) {
    console.log(error);
  });

  $scope.showPopup = modalServices.showPopup;

  $scope.dianzi = function(){
    if(localStorage.userId){
      window.location.href = "/#/step-1"
    } else {
      $scope.showPopup();
    }
  };

}
