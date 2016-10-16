angular.module('starter.controllers')

  .controller('DetailEditIntroductionCtrl', function($scope, $stateParams, $ionicHistory, DetailService) {

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
      quill.setContents(JSON.parse(localStorage.getItem('contents-'+projectId)));
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
        console.log(data);
      }, function () {

      });
      $ionicHistory.goBack();
    };

    $scope.cancel = function() {
      $ionicHistory.goBack();
    }
  })

