angular.module('starter.controllers')

  .controller('InnovationCtrl', InnovationCtrl)

function InnovationCtrl($scope, Services, $ionicPopup) {


  // init banner carousel
  new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    loop: true
  });

  // Get Projects
  Services.getProjects(function (data) {
    $scope.projects = data.data.content;
  }, function (error) {
    console.log(error);
  });

  // show modal
  var myPopup;
  $scope.showPopup = function() {
    // An elaborate, custom popup
    myPopup = $ionicPopup.show({
      templateUrl: '../../templates/form/login-register.html',
      scope: $scope
    });
  };

  // close modal
  $scope.closePopup = function () {
    myPopup.close();
  }

  // change form view
  $scope.isLogin = true;
  $scope.changeRegister =function () {
    $scope.isLogin = false;
  }

  $scope.changeLogin =function () {
    $scope.isLogin = true;
  }
  
}
