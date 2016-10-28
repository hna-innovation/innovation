angular.module('starter.controllers')

.controller('StepFirstCtrl', StepFirstCtrl);

function StepFirstCtrl($scope, $http, $ionicPopup, $timeout, Services, HnaAlert, PageService, $state, ModalServices, $ionicViewSwitcher, ImageUploadService) {
  // set title
  PageService.setTitle('记录新创意');
  
  // 初始化表单数据
  $scope.formdata = {};

  // 触发上传图片控件
  $scope.photoUpload = function() {
    jQuery('#photoUpload').trigger('click');
  };

  // 图片从本地选择完成后
  $scope.beforeChange = function(file) {
    $scope.loading = true;
  };

  // 图片上传
  $scope.uploadFiles = uploadImage;

  // 创意创建
  $scope.create = createDianzi;

  function uploadImage(file, errFiles) {
    var errFile = errFiles && errFiles[0];

    if (errFile) {
      _validateImgFile(errFile.$error);
      return;
    }

    if (file) {
      ImageUploadService
        .upload(file)
        .then(function(result) {
          $scope.loading = false;
          var response = result.data;

          $timeout(function() {
            if (response.code == 0) {
              _imageUploadSuccess(response);
              HnaAlert.default('图片上传成功！');
            } else {
              HnaAlert.default('图片上传失败！');
            }
          });
          
        },function() {
          $scope.loading = false;
          HnaAlert.default('图片上传失败！');
        });
    } else {
      $scope.loading = false;
    }
  }

  function createDianzi() {
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
        $state.go('step-3', {parentPage: 'step-1'});
        $ionicViewSwitcher.nextDirection("forward");
        HnaAlert.default('创意已保存至草稿箱!');

      } else {
        HnaAlert.default('创意已保存失败!');
      }
    }, function(error) {
      HnaAlert.default('创意已保存失败!');
    });
  };

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

  function _imageUploadSuccess(response) {
    if (response.data) {
      $scope.imagesChild = response.data[0].id;
      $scope.picURL = response.data[0].url;
      jQuery('#img-view').attr('src', $scope.picURL)
      jQuery('#photoUpload').val('');
    }
  }
  
};
