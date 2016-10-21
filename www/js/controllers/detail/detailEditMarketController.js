angular.module('starter.controllers')

  .controller('DetailEditMarketCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', 'CacheService', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert, CacheService) {

    var projectId = $stateParams.projectId;

    $scope.form = {
      market: CacheService.getMarketOfDetail()
    }

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
    };

    $scope.cancel = function () {
      $state.go('detail', {projectId: projectId, pageName: 'innovation'}, {reload: false});
    }
  }])

