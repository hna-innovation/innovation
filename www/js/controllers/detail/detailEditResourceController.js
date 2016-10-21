angular.module('starter.controllers')

  .controller('DetailEditResourceCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', 'CacheService', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert, CacheService) {

    var projectId = $stateParams.projectId;

    $scope.form = {
      resource: CacheService.getResourceOfDetail()
    }

    $scope.save = function () {
      var data = {
        projectId: projectId,
        passData: {
          resourceRequired: $scope.form.resource
        }
      }
      DetailService.editDetailResource(data, function (data) {
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

