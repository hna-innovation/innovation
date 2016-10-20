angular.module('starter.controllers')

.controller('StepFirstCtrl', StepFirstCtrl);

function StepFirstCtrl($scope, $http, $ionicPopup, $timeout, Services, FileUploader, HnaAlert, Page, $state, ModalServices) {
  // set title
  // Page.setTitle('记录新创意');
  // 初始化表单数据
  $scope.formdata = {};

  // 触发file input
  $scope.photoUpload = function() {
    jQuery('#photoUpload').trigger('click');
  };

  // 图片上传接口
  $scope.uploader = new FileUploader({
    url: '/api/media/image',
    isUploading: true,
    autoUpload: true,
    removeAfterUpload: true
  });

  // 限制上传类型和文件大小
  $scope.uploader.filters.push({
    name: 'imageTypeFilter',
    fn: function(item) {
      return item.type.indexOf('image/') !== -1;
    }
  });
  $scope.uploader.filters.push({
    name: 'imageSizeFilter',
    fn: function(item) {
      return item.size <= 5242880;
    }
  });
  $scope.uploader.onWhenAddingFileFailed = function(fileItem, filter) {
    console.log(filter)
    if (filter.name == 'imageTypeFilter') {
      HnaAlert.default('请选择正确的图片类型！');
      jQuery('#photoUpload').val('');
    }
    if (filter.name == 'imageSizeFilter') {
      HnaAlert.default('图片大小不能超过5M！');
      jQuery('#photoUpload').val('');
    }
  };

  // loading
  $scope.uploader.onAfterAddingFile = function(fileItem) {
    $scope.loading = true;
  };

  // 上传成功
  $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
    if (response.code == 0) {
    $scope.loading = false;
    $scope.imagesChild = response.data[0].id;
    $scope.picURL = response.data[0].url;
    jQuery('#img-view').attr('src', $scope.picURL)
    HnaAlert.default('图片上传成功！');
    jQuery('#photoUpload').val('');
    } else {
      if(response.code == 401){
        HnaAlert.default('登录超时！请重新登录');
        $state.go('innovation', {}, {reload: true});
        localStorage.removeItem('userId');
        ModalServices.showPopup();
      } else {
        HnaAlert.default('图片上传失败');
      }
    }
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
