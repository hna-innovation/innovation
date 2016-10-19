angular.module('starter.controllers')

  .controller('DetailEditIntroductionCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert) {

    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block'],
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow' // or 'bubble'
    });

    var projectId = $stateParams.projectId;

    function initEditor() {
      var introduction = localStorage.getItem('introduction-' + projectId) ? localStorage.getItem('introduction-' + projectId) : '';
      angular.element(document.querySelector('#editor-container .ql-editor')).append(introduction);
    }

    initEditor();

    $scope.save = function () {
      var data = {
        projectId: projectId,
        passData: {
          introduction: document.querySelector('.ql-editor').innerHTML
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

