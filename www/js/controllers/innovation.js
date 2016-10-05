angular.module('starter.controllers')

  .controller('InnovationCtrl', InnovationCtrl)

function InnovationCtrl($scope, Services, $ionicPopup) {


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
  };

  // change form view
  $scope.isLogin = true;
  $scope.changeRegister =function (event) {
    if($scope.isLogin){
      event.preventDefault();
    }
    $scope.isLogin = false;
  };

  $scope.changeLogin =function (event) {
    if(!$scope.isLogin){
      event.preventDefault();
    }
    $scope.isLogin = true;
  };

  // form login or register
  $scope.isUnique = true;
  $scope.loginOrRegister =  function (data) {
    var passData = {
      email: data.email,
      password: data.password
    }
    if($scope.isLogin){
      if(!data.email || !data.password){
        return;
      }
      Services.login(passData, function (res) {
        if(res.error){
          console.log(res.error);
        } else {
          localStorage.userId = res.data.id;
          myPopup.close();
        }
      }, function (error) {
        console.log('error');
      })
    } else {
      if(!data.email || !data.password || !data.passwordRepeat){
        return;
      }
      Services.register(passData, function (res) {
        if(res.error){
          console.log(res.error);
          $scope.isUnique = false;
        } else {
          myPopup.close();
        }
      }, function (error) {
        console.log('error');
      })
    }

  };

  $scope.dianzi = function(){
    if(localStorage.userId){
      window.location.href = "/#/step-1"
    }
  };

}
