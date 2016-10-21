angular.module('starter.controllers')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($scope, AuthEvent, ModalServices, Services, $state, HnaAlert, mobileTypeDetectService, $window) {
  'use strict';

  $scope.$on(AuthEvent.NOT_AUTHENTICATED, function() {
    HnaAlert.default('请您先登录');
    ModalServices.showPopup();
  });

  $scope.$on(AuthEvent.LOGOUT, function() {

    $state.go('innovation');
    Services.logout(function() {
      localStorage.removeItem('userId');
      $state.reload('innovation');
      HnaAlert.success('您已退出登录');

    }, function() {
      // TODO
    });
  });


  var getMobileType = function () {
    return mobileTypeDetectService.getMobileOperatingSystem().toLowerCase();
  }

  $scope.joinChat = function () {
    var url = '';
    var downloadUrl = '';
    switch (getMobileType()) {
      case 'ios':
        url = 'bim://bimwork';
        downloadUrl = 'https://beta.bugly.qq.com/7ubr';
        break;
      case 'android':
        url = 'intent://bim/home#Intent;scheme=bim;package=com.pactera.hnabim;end';
        downloadUrl = 'https://beta.bugly.qq.com/u58z';
        break;
    }
    if (url) {
      $window.location = url;
    }

    var clickedDate = +new Date;
    setTimeout(function () {
      !window.document.webkitHidden && setTimeout(function () {
        if (+new Date - clickedDate < 6000) {
          if(downloadUrl){
            window.location = downloadUrl;
          }
        }
      }, 1500);
    }, 1500)
  }
}
