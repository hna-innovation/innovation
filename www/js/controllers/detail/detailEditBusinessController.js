angular.module('starter.controllers')

  .controller('DetailEditBusinessCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert) {

    var projectId = $stateParams.projectId;

    $scope.form = {
      business: localStorage.getItem('business-' + projectId) ? localStorage.getItem('business-' + projectId) : ''
    }

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
      $ionicHistory.goBack();
    }
  }])

