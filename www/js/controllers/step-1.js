angular.module('starter.controllers')

    .controller('StepFirstCtrl', StepFirstCtrl)

function StepFirstCtrl($scope, $http, $ionicPopup, $timeout, Services, FileUploader, hnaAlert) {
    // 初始化表单数据
    $scope.formdata = {};
    $scope.formdata.images = [];
    $scope.formdata.imageUrl = [];

    // 获取点子列表
    $scope.getList = function () {
        Services.dianziList(localStorage.userId, function (result) {
            if (result.code == 0) {
                if (result.data.content.length == 0) {
                    $scope.ItemList = false;
                    $scope.itemCount = 0;
                } else {
                    $scope.itemCount = result.data.content.length;
                    $scope.ItemList = true;
                    $scope.ItemListContent = result.data.content;
                }
            } else {
                console.log(result);
            }

        }, function (error) {
            console.log(error);
        });
    };
    $scope.getList();

    // 转换页面
    $scope.change = function () {
        $scope.ItemList = false;
    }

    // 触发file input
    $scope.photoUpload = function () {
        jQuery('#photoUpload').trigger('click');
    };

    // 图片上传接口
    $scope.uploader = new FileUploader({
        url: '/api/media/image'
    });

    //自动上传图片
    $scope.uploader.onAfterAddingFile = function (fileItem) {
        setTimeout(function () {
            jQuery('#automatic-upload').click();
        }, 100)
    };

    // 上传成功
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
        if (status != 200) return hnaAlert.error('图片上传失败！');
        $scope.loading = false;
        hnaAlert.error('图片上传成功！');
        if ($scope.formdata.images.indexOf(response.data.id) == -1) {
            $scope.formdata.images.push(response.data.id);
        }
    };
    // 添加或更换图片事件
    $scope.photoChange = function (event) {
        $scope.loading = true;
        var fileInput = event.target.files;
        var windowURL = window.URL || window.webkitURL;
        var picURL = windowURL.createObjectURL(fileInput[0]);
        jQuery('#img-view').attr('src', picURL)
        
        if ($scope.formdata.imageUrl.indexOf(picURL) == -1) {
            $scope.formdata.imageUrl.push(picURL);
        }
    };
    angular.element(jQuery('#photoUpload')).on('change', $scope.photoChange);

    // 点子创建
    $scope.create = function () {
        // 只添加一张图片
        $scope.formdata.images = [$scope.formdata.images[$scope.formdata.images.length - 1]];
        if ($scope.formdata.images[0] == undefined) {
            hnaAlert.error('图片不能为空！');
            return;
        }
        if ($scope.formdata.description == undefined || $scope.formdata.description == '') {
            hnaAlert.error('记录不能为空！');
            return;
        }

        if ($scope.ItemList) return;
        var num = $scope.itemCount || '';
        num++;
        console.log($scope.formdata.images)
        Services.dianziCreate({
            "name": "我的点子" + num,
            "description": $scope.formdata.description,
            "creator": localStorage.userId,
            "images": $scope.formdata.images
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

    // 点子删除
    $scope.del = function (draftId) {
        var confirmPopup = $ionicPopup.confirm({
            template: '<div class="confirm-msg">你确定要删除吗？</div>',
            cancelText: '取消', 
            cancelType: 'button-dark button-normal', 
            okText: '确定', 
            okType: 'button-assertive button-normal',
        });
        confirmPopup.then(function (res) {
            if (res) {
                Services.dianziDelete(draftId, function (result) {
                    if (result.code == 0) {
                        hnaAlert.success('删除成功！');
                        $scope.getList();
                    } else {
                        console.log(result);
                    }
                }, function (error) {
                    console.log(error);
                });
            } else {
                console.log('已取消');
            }
        });
    };

    // 点子编辑
    $scope.edit = function (draftId) {
        localStorage.draftId = draftId;
        window.location.href = '/#/step-2'
    };
};


