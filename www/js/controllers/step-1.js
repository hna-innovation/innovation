angular.module('starter.controllers')

.controller('StepFirstCtrl', StepFirstCtrl);

function StepFirstCtrl($scope, $http, $ionicPopup, $timeout, Services, FileUploader, HnaAlert, Page, $state, ModalServices, Upload) {
  // set title
  // Page.setTitle('记录新创意');
  // 初始化表单数据
  $scope.formdata = {};

  // 图片上传接口
  $scope.uploadFiles = function(file, errFiles) {
    $scope.errFile = errFiles && errFiles[0];

    if ($scope.errFile) {
      _validateImgFile($scope.errFile.$error);
      return;
    }

    if (file) {
      $scope.loading = true;
      file.upload = Upload.upload({
        url: '/api/media/image',
        data: { file: file }
      });

      file.upload.then(function(result) {
        $scope.loading = false;
        var response = result.data;
        
        $timeout(function() {

          if (response.code == 0) {
            $scope.imagesChild = response.data[0].id;
            $scope.picURL = response.data[0].url;
            jQuery('#img-view').attr('src', $scope.picURL)
            HnaAlert.default('图片上传成功！');
            jQuery('#photoUpload').val('');
          } else {
            HnaAlert.default('图片上传失败');    
          }

        });
      }, function() {
        $scope.loading = false;
        HnaAlert.default('图片上传失败');
      });
    } else {
    }
  }

  function _validateImgFile(errType) {
    // 限制上传类型和文件大小
    if ( errType === 'pattern') {
      HnaAlert.default('请选择正确的图片类型！');
      jQuery('#photoUpload').val('');
      return;
    }

    if ( errType === 'maxSize') {
      HnaAlert.default('图片大小不能超过5M！');
      jQuery('#photoUpload').val('');
      return;
    }
  }

  // 触发file input
  $scope.photoUpload = function() {
    jQuery('#photoUpload').trigger('click');
  };

  // 创意创建
  $scope.create = function() {
    if ($scope.imagesChild == undefined) {
      HnaAlert.default('图片不能为空！');
      return;
    }

    if ($scope.formdata.description == undefined || $scope.formdata.description == '') {
      HnaAlert.default('记录不能为空！');
      return;
    }

    if ($scope.formdata.description.length > 135) {
      HnaAlert.default('字数不能超过135字');
      return;
    }

    Services.dianziCreate({
      "description": $scope.formdata.description,
      "images": [$scope.imagesChild]
    }, function(result) {
      if (result.code == 0) {
        localStorage.draftId = result.data.id;
        $state.go('step-3');
        HnaAlert.default('创意已保存至草稿箱!');

      } else {
        // TODO Handle error
        // console.log(result);
      }
    }, function(error) {
      // TODO Handle error
      // console.log(error);
    });
  };
};
