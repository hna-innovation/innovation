angular.module('starter.controllers')

    .controller('StepFirstCtrl', StepFirstCtrl)

function StepFirstCtrl($scope, $http, $ionicPopup, $timeout, Services, FileUploader, HnaAlert, Page) {
    // set title
    Page.setTitle('记录新创意');
    // 初始化表单数据
    $scope.formdata = {};

    // 获取创意列表
    $scope.getList = function () {
        Services.dianziList(localStorage.userId, function (result) {
            if (result.code == 0) {
                if (result.data.content.length == 0) {
                    $scope.itemCount = 0;
                } else {
                    $scope.itemCount = result.data.content.length;
                }
            } else {
                console.log(result);
            }

        }, function (error) {
            console.log(error);
        });
    };
    $scope.getList();

    // 触发file input
    $scope.photoUpload = function () {
        jQuery('#photoUpload').trigger('click');
    };

    // 图片上传接口
    $scope.uploader = new FileUploader({
        url: '/api/media/image',
        isUploading:true,
        autoUpload:true,
        removeAfterUpload: true
    });

    // 上传成功
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        if (status != 200) return HnaAlert.default('图片上传失败！');
        $scope.loading = false;
        HnaAlert.default('图片上传成功！');
        $scope.imagesChild = response.data[0].id;
        $scope.picURL = response.data[0].url;
        jQuery('#img-view').attr('src', $scope.picURL)
    };

    // 创意创建
    $scope.create = function () {
        if ($scope.imagesChild == undefined) {
            HnaAlert.default('图片不能为空！');
            return;
        }

        if ($scope.formdata.description == undefined || $scope.formdata.description == '') {
            HnaAlert.default('记录不能为空！');
            return;
        }

        var num = $scope.itemCount || '';
        num++;
        Services.dianziCreate({
            "name": "我的创意" + num,
            "description": $scope.formdata.description,
            "creator": localStorage.userId,
            "images": [$scope.imagesChild]
        }, function (result) {
            if (result.code == 0) {
                localStorage.draftId = result.data.id;
                window.location.href = '/#/step-2';
            } else {
                console.log(result);
            }
        }, function (error) {
            console.log(error);
        });
    };
};


