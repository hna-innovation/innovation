angular.module('starter.services')
  .factory('ModalServices', ['$rootScope', '$ionicPopup', 'IonicClosePopupService', function ($rootScope, $ionicPopup, IonicClosePopupService) {

    var loginPopup,registerPopup;
    var showPopup = function () {
      loginPopup = $ionicPopup.show({
        templateUrl: '../templates/loginForm/login.html'
      });
      IonicClosePopupService.register(loginPopup);
    };

    return {
      showPopup: showPopup,
      closePopup: function () {
        if (loginPopup) loginPopup.close();
        if (registerPopup) registerPopup.close();
      },
      goToLogin: function () {
        showPopup();
        registerPopup.close();
      },
      goToRegister: function () {
        registerPopup = $ionicPopup.show({
          templateUrl: '../templates/loginForm/register.html'
        });
        IonicClosePopupService.register(registerPopup);
        loginPopup.close();
      }
    };
  }]);
