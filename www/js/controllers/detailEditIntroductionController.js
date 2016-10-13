angular.module('starter.controllers')

  .controller('DetailEditIntroductionCtrl', function($scope, $stateParams, $ionicHistory) {

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
      localStorage.setItem('contents-'+projectId, JSON.stringify(quill.getContents()));
      $ionicHistory.goBack();
    };

    $scope.cancel = function() {
      $ionicHistory.goBack();
    }
  })

