angular.module('starter.services')
  .factory('modalServices', modalServices);

function modalServices($rootScope, $ionicPopup) {
  // show modal
  var myPopup;
  var showPopup = function() {
    // An elaborate, custom popup
    myPopup = $ionicPopup.show({
      templateUrl: '../templates/form/login-register.html',
      scope: $rootScope
    });
  };

  // close modal
  $rootScope.closePopup = function () {
    myPopup.close();
  };

  // change form view
  $rootScope.isLogin = true;
  $rootScope.changeRegister =function (event) {
    if($rootScope.isLogin){
      event.preventDefault();
    }
    $rootScope.isLogin = false;
  };

  $rootScope.changeLogin =function (event) {
    if(!$rootScope.isLogin){
      event.preventDefault();
    }
    $rootScope.isLogin = true;
  };

  // form login or register
  $rootScope.isUnique = true;
  $rootScope.loginOrRegister =  function (data) {
    var passData = {
      email: data.email,
      password: data.password
    }
    if($rootScope.isLogin){
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
          $rootScope.isUnique = false;
        } else {
          myPopup.close();
        }
      }, function (error) {
        console.log('error');
      })
    }
  };

  return {
    showPopup: showPopup
  };
}
