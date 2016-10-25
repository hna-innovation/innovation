angular.module('starter.controllers')

  .controller('DetailEditMarketCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', 'CacheService', '$ionicViewSwitcher', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert, CacheService, $ionicViewSwitcher) {

    var projectId = $stateParams.projectId;

    $scope.isLoadData = false;

    DetailService.getDetailMarket(projectId, function (data) {
      $scope.form = {
        market: data.data.marketAnalysis
      }
      $scope.isLoadData = true;
    }, function () {
      HnaAlert.error('服务器超时，请重试');
      $scope.isLoadData = true;
    })

    $scope.save = function () {
      var data = {
        projectId: projectId,
        passData: {
          marketAnalysis: $scope.form.market
        }
      }
      DetailService.editDetailMarket(data, function (data) {
        HnaAlert.success('提交成功');
      }, function () {
        HnaAlert.success('服务器超时，请重试');
      });

      // reload
      $state.go('detail', {projectId: projectId, pageName: 'innovation'}, {reload: true});
      $ionicViewSwitcher.nextDirection("back");
    };

    $scope.cancel = function () {
      $state.go('detail', {projectId: projectId, pageName: 'innovation'}, {reload: false});
      $ionicViewSwitcher.nextDirection("back");
    }
  }])

