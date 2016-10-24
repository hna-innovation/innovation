angular.module('starter.controllers')

  .controller('DetailEditBusinessCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', 'CacheService', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert, CacheService) {

    var projectId = $stateParams.projectId;

    $scope.isLoadData = false;

    DetailService.getDetailBusiness(projectId, function (data) {
      $scope.form = {
        business: data.data.businessModel
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
          businessModel: $scope.form.business
        }
      }
      DetailService.editDetailBusiness(data, function (data) {
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

