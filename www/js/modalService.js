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

  // $rootScope.login = function (data) {
  //   var loginData = {
  //     email: data.email,
  //     password: data.password
  //   }
  //   if (!data.email || !data.password) {
  //     return;
  //   }
  //   Services.login(loginData, function (res) {
  //     if (res.error) {
  //       HnaAlert.error('登录信息不正确！');
  //     } else {
  //       localStorage.userId = res.data.id;
  //       $window.location.reload();
  //       HnaAlert.success('登录成功！');
  //     }
  //   });
  // }
  //
  // $rootScope.isUnique = true;
  // $rootScope.register = function (data) {
  //   var registerData = {
  //     email: data.email,
  //     password: data.password
  //   }
  //
  //   if (!data.email || !data.password || !data.passwordRepeat) {
  //     return;
  //   }
  //
  //   Services.register(registerData, function (res) {
  //     if (res.error) {
  //       HnaAlert.error('邮箱已被注册！');
  //       $rootScope.isUnique = false;
  //       console.log(res.error);
  //     } else {
  //       HnaAlert.success('注册成功！');
  //     }
  //   });
  // }

  return {
    showPopup: showPopup
  };
}
