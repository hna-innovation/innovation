angular.module('starter.controllers')

    .controller('StepSecondCtrl', StepSecondCtrl)

function StepSecondCtrl($scope, $http, $ionicPopup, $timeout, Services, FileUploader, HnaAlert, Page) {
    // set title
    Page.setTitle('点子编辑');
    var img = null;

    // 获取点子详情
    $scope.getDetail = function () {
        Services.dianziDetail(localStorage.draftId, function (result) {
            if (result.code == 0) {
                $scope.ItemContent = result.data.photos;
                $scope.images = result.data.projectDraft.images;
                $scope.formdata.description = result.data.projectDraft.description;
                $scope.formdata.name = result.data.projectDraft.name;
                console.log(result);
            } else {
                console.log(result);
            }
        }, function (error) {
            console.log(error);
        });
    };
    $scope.getDetail();

    $scope.ItemUpdate = function (status, msg) {
        console.log($scope.images)
        Services.dianziEdit(localStorage.draftId,
            {
                "name": $scope.formdata.name,
                "description": $scope.formdata.description,
                "creator": localStorage.userId,
                "images": $scope.images
            },
            function (result) {
                if (result.code == 0) {
                    if (status) {
                        window.location.href = '/#/step-3';
                    } else {
                        HnaAlert.default(msg);
                    }
                } else {
                    console.log(result);
                }
            }, function (error) {
                console.log(error);
            });
    }
    // 初始化表单数据
    $scope.formdata = {};

    // 触发file input
    $scope.photoUpload = function () {
        jQuery('#photoUpload2').trigger('click');
    };
    jQuery('#photoUpload2').change(function (ev) {

        console.log(ev.target.files)
        console.log($scope.uploader)
    })

    // 图片上传接口
    $scope.uploader = new FileUploader({
        url: '/api/media/image',
        isUploading:true,
        autoUpload:true,
        removeAfterUpload: true
    });

    // loading
    $scope.uploader.onAfterAddingFile = function (fileItem) {
        $scope.loading = true;
    };

    // 上传成功
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        if (status != 200) return HnaAlert.default('图片上传失败！');
        $scope.loading = false;
        $scope.images.push(response.data.id);
        console.log($scope.images);
        $scope.ItemUpdate(0, '图片上传成功！');
        $scope.getDetail();
        fileItem = null
    };

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
                console.log($scope.images);
                $scope.ItemUpdate(0, '删除成功！');
                $scope.getDetail();

            } else {
                console.log('已取消');
            }
        });
    };

    // 点子创建
    $scope.create = function () {
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