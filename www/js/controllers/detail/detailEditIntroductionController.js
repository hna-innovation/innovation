angular.module('starter.controllers')

  .controller('DetailEditIntroductionCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', 'mobileTypeDetectService', '$ionicViewSwitcher', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert, mobileTypeDetectService, $ionicViewSwitcher) {

    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block'],
        ]
      },
      placeholder: '请输入文字',
      theme: 'snow' // or 'bubble'
    });

    var _projectId = $stateParams.projectId;
    var _parentPage = $stateParams.parentPage;

    // bugfix: don't focus the line easily'
    $('.ql-editor p, #editor-container, .ql-editor').on('mousedown mouseup touchstart touchend', function (e) {
      e.stopPropagation();
    });

    function initEditor() {
      DetailService.getDetailIntroduction(_projectId, function (data) {
        angular.element(document.querySelector('#editor-container .ql-editor')).append(data.data.introduction);
      }, function () {
        HnaAlert.error('服务器超时，请重试');
      })
    }

    initEditor();

    $scope.isWeiXinOnIOS = function(){
      return mobileTypeDetectService.isWeiXin() && (mobileTypeDetectService.getMobileOperatingSystem().toLowerCase() === 'ios')
    }

    $scope.save = function () {
      var data = {
        projectId: _projectId,
        passData: {
          introduction: document.querySelector('.ql-editor').innerHTML
        }
      }
      DetailService.editDetailIntroduction(data, function (data) {
        HnaAlert.success('提交成功');
      }, function () {
        HnaAlert.error('服务器超时，请重试');
      });

      // reload
      $state.go('detail', {projectId: _projectId, pageName: _parentPage}, {reload: true});
      $ionicViewSwitcher.nextDirection("back");
    };

    $scope.cancel = function () {
      $state.go('detail', {projectId: _projectId, pageName: _parentPage}, {reload: false});
      $ionicViewSwitcher.nextDirection("back");
    }

  }])


