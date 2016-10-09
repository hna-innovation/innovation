angular.module('starter.services')
  .factory('ModalServices', ModalServices);

function ModalServices($rootScope, $ionicPopup, Services, HnaAlert) {
  // show modal
  var myPopup;
  var showPopup = function () {
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
  $rootScope.changeRegister = function (event) {
    $rootScope.isUnique = true;
    if ($rootScope.isLogin) {
      event.preventDefault();
    }
    $rootScope.isLogin = false;
  };

  $rootScope.changeLogin = function (event) {
    $rootScope.isUnique = true;
    if (!$rootScope.isLogin) {
      event.preventDefault();
    }
    $rootScope.isLogin = true;
  };

  // form login or register
  $rootScope.isUnique = true;
  $rootScope.loginOrRegister = function (data) {
    var passData = {
      email: data.email,
      password: data.password
    }
    if ($rootScope.isLogin) {
      if (!data.email || !data.password) {
        return;
      }
        $rootScope.isUnique = true;
      Services.login(passData, function (res) {
        if (res.error) {
          console.log(res.error);
          $rootScope.isUnique = false;
          if(res.error == '登录错误'){
            return $rootScope.msg =  "邮箱不存在或密码错误"
          }
          $rootScope.msg =  res.error;
        } else {
          localStorage.userId = res.data.id;
          $rootScope.isUnique = true;
          HnaAlert.default('登录成功！');
          myPopup.close();
        }
      }, function (error) {
        console.log('error');
      })
    } else {
      if (!data.email || !data.password || !data.passwordRepeat) {
        return;
      }
      Services.register(passData, function (res) {
        if (res.error) {
          console.log(res.error);
          $rootScope.msg =  res.error;
          $rootScope.isUnique = false;
        } else {
          $rootScope.isUnique = true;
          HnaAlert.default('注册成功！');
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
