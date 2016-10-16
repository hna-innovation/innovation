angular.module('starter.controllers')

  .controller('DetailEditIntroductionCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert) {

    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['image']
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow' // or 'bubble'
    });

    var projectId = $stateParams.projectId;

    function initEditor() {
      var introduction = localStorage.getItem('introduction-' + projectId) ? localStorage.getItem('introduction-' + projectId) : '[]';
      quill.setContents(JSON.parse(introduction));
    }

    initEditor();

    $scope.save = function () {
      var data = {
        projectId: projectId,
        passData: {
          introduction: JSON.stringify(quill.getContents())
        }
      }
      DetailService.editDetailIntroduction(data, function (data) {
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

