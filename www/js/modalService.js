angular.module('starter.services')
  .factory('ModalServices', function ($rootScope, $ionicPopup) {

    var showPopup = function () {
      loginPopup = $ionicPopup.show({
        templateUrl: '../templates/loginForm/login.html'
      });
    };

    return {
      showPopup: showPopup,
      closePopup: function () {
        loginPopup.close();
        registerPopup.close();
      },
      goToLogin: function () {
        showPopup();
        registerPopup.close();
      },
      goToRegister: function () {
        registerPopup = $ionicPopup.show({
          templateUrl: '../templates/loginForm/register.html'
        });
        loginPopup.close()
      }
    };
  });
