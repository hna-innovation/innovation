angular.module('starter.controllers')
  .controller('UserCtrl', function($scope, $stateParams, $location, $ionicPopup, $state, $translate, Services, $window, AuthEvent, UserService, HnaAlert, LANGUAGE, Content, PageService, $ionicViewSwitcher) {

    var resourcesType = $location.search()['type'];

    PageService.setTitle('个人中心');

    //Set the language
    var languageKeys = Object.keys(LANGUAGE.languages);
    var currentLanguageKey = $translate.use();

    var languages = [];
    var currentLanguage = null;

    languageKeys.forEach(function(item){
      var option = {key: item, name: LANGUAGE.languages[item]};
      if(item == currentLanguageKey)
        currentLanguage = option;
      languages.push(option);
    })

    $scope.currentLanguage = currentLanguage;
    $scope.languages = languages;


    $scope.getResources = function() {};

    //获取用户信息
    $scope.getUserInfo = function() {
      UserService.getUserInfo(function(result) {
        $scope.userInfo = result.data;
        $scope.userHeaderIcon = localStorage.userHeaderIcon || result.data.headerIcon;
        //UserInfo成功返回后再去请求ExtensionInfo
        $scope.getUserExtensionInfo();
      }, function(result) {
        //出错信息统一在app.js处理,包括错误码401、404、504
        // HnaAlert.default('获取用户信息出错！');
      });
    }

    $scope.getUserExtensionInfo = function() {
      UserService.getUserExtensionInfo(function(result) {
        $scope.userExtensionInfo = result.data;
      }, function() {
        //出错信息统一在app.js处理,包括错误码401、404、504
        // HnaAlert.default('获取用户信息出错！');
      });
    }

    $scope.goUser = function() {
      $state.go('user', { userid: localStorage.userId });
    }

    $scope.goEditUserInfo = function(target) {
      $ionicViewSwitcher.nextDirection('forward');
      $state.go('user-edit-info', target);
    }

    $scope.goEditUserAvator = function() {
      $ionicViewSwitcher.nextDirection('forward');
      $state.go('user-edit-avator');
    }

    $scope.logout = function() {
      $scope.$emit(AuthEvent.LOGOUT);
    }

    $scope.setLangugage = function(currentLanguage) {
      $translate.use(currentLanguage.key);
    };

    $scope.userDefaultHeader = Content.image.DEFAULT_HEADER;
    $scope.getUserInfo();

  })
