angular.module('starter.services')
  .factory('ModalServices', ModalServices);

function ModalServices($rootScope, $ionicPopup) {
  // show modal
  var showPopup = function () {
    loginPopup = $ionicPopup.show({
      templateUrl: '../templates/loginForm/login.html',
      scope: $rootScope
    });
  };

  $rootScope.closePopup = function () {
    loginPopup.close();
    registerPopup.close();
  };

  $rootScope.goToLogin = function () {
    showPopup();
    registerPopup.close();
  };

  $rootScope.goToRegister = function () {
    registerPopup = $ionicPopup.show({
      templateUrl: '../templates/loginForm/register.html',
      scope: $rootScope
    });
    loginPopup.close()
  };
  return {
    showPopup: showPopup
  };
}
