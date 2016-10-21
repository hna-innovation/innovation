angular.module('starter.controllers')

  .controller('DetailEditIntroductionCtrl', ['$scope', '$stateParams', '$ionicHistory', 'DetailService', '$state', 'HnaAlert', 'CacheService', function ($scope, $stateParams, $ionicHistory, DetailService, $state, HnaAlert, CacheService, mobileTypeDetectService) {

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

    var projectId = $stateParams.projectId;

    // bugfix: don't focus the line easily'
    $('.ql-editor p, #editor-container, .ql-editor').on('mousedown mouseup touchstart touchend', function (e) {
      e.stopPropagation();
    });

    function initEditor() {
      var introduction = CacheService.getIntroductionOfDetail();
      angular.element(document.querySelector('#editor-container .ql-editor')).append(introduction);
    }

    initEditor();

    $scope.isWeiXinOnIOS = function(){
      return mobileTypeDetectService.isWeiXin() && (mobileTypeDetectService.getMobileOperatingSystem().toLowerCase() === 'ios')
    }

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
      $state.go('detail', {projectId: projectId, pageName: 'innovation'}, {reload: false});
    }


  }])

