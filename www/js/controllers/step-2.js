angular.module('starter.controllers')

    .controller('StepSecondCtrl', StepSecondCtrl)

function StepSecondCtrl($scope, $http, $ionicPopup, $timeout, Services, HnaAlert, Page, $state, Upload) {
    // set title
    // Page.setTitle('创意编辑');

    // 获取创意详情
    $scope.getDetail = function () {
        Services.dianziDetail(localStorage.draftId, function (result) {
            if (result.code == 0) {
                // $scope.ItemContent = result.data.photos;
                $scope.images = result.data.images;
                $scope.formdata.description = result.data.description;
                if ($scope.images.length < 8) {
                    $scope.addShow = true;
                } else {
                    $scope.addShow = false;
                }
            } else {
                // console.log(result);
            }
        }, function (error) {
            // console.log(error);
        });
    };
    $scope.getDetail();

    // 更新创意
    $scope.ItemUpdate = function (status, msg, msg2) {
        var images = $scope.images.map(function(img){
            return img.id;
        });

        Services.dianziEdit(localStorage.draftId,
            {
                "description": $scope.formdata.description,
                "images": images
            },
            function (result) {
                if (result.code == 0) {
                    if (status) {
                        $state.go('step-3');
                        HnaAlert.default('创意已保存至草稿箱!');
                    } else {
                        HnaAlert.default(msg);
                    }
                    $scope.getDetail();
                } else {
                    HnaAlert.default(msg2);
                }
            }, function (error) {
                HnaAlert.default(msg2);
            });
    }
    // 初始化表单数据
    $scope.formdata = {};

    // 触发file input
    $scope.photoUpload = function () {
        jQuery('#photoUpload2').trigger('click');
    };

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
              response.data.forEach(function(item) {
                $scope.images.push({
                  id: item.id
                });
              });

              if ($scope.images.length < 8) {
                $scope.addShow = true;
              } else {
                $scope.addShow = false;
              }

              $scope.ItemUpdate(0, '图片上传成功！', '图片上传失败！');
              jQuery('#photoUpload2').val('');

            } else {
              HnaAlert.default('图片上传失败');
            }

          });
        }, function() {
          $scope.loading = false;
          HnaAlert.default('图片上传失败');
        });
      } else {}
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

    // 图片删除
    $scope.del = function (imgId) {
        var confirmPopup = $ionicPopup.confirm({
            template: '<div class="confirm-msg">你确定要删除吗？</div>',
            cancelText: '取消',
            cancelType: 'button-grays button-normal',
            okText: '确定',
            okType: 'button-reds button-normal',
        });
        confirmPopup.then(function (res) {
            if (res) {
                $scope.images.splice($scope.images.indexOf(imgId), 1);
                $scope.ItemUpdate(0, '删除成功！', '删除失败！');
            } else {
                console.log('已取消');
            }
        });
    };

    // 创意创建
    $scope.create = function () {
        if($scope.loading == true) return;
        if ($scope.images == undefined || $scope.images.length == 0) {
            HnaAlert.default('图片不能为空！');
            return;
        }

        if ($scope.formdata.description == undefined || $scope.formdata.description == '') {
            HnaAlert.default('记录不能为空！');
            return;
        }
        $scope.ItemUpdate(1);
    };
};
