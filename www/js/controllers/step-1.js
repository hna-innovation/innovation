angular.module('starter.controllers')

    .controller('StepFirstCtrl', StepFirstCtrl)

function StepFirstCtrl($scope, $http, $ionicPopup, $timeout, Services, FileUploader) {
    // 初始化表单数据
    $scope.formdata = {};
    $scope.formdata.image = [];
    $scope.formdata.imageUrl = [];

    // 获取点子列表
    $scope.getList = function () {
        Services.dianziList(localStorage.userId, function (result) {
            if (result.code == 401) {
                if (confirm('请先登陆！')) {
                    window.location.href = '/#/innovation';
                }
            }
            else if (result.code == 0) {
                if (result.data.content.length == 0) {
                    $scope.ItemList = false;
                    $scope.itemCount = 0;
                } else {
                    $scope.itemCount = result.data.content.length;
                    $scope.ItemList = true;
                    $scope.ItemListContent = result.data.content;
                    console.log($scope.ItemListContent);
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
        if (status != 200) return alert('登录状态已失效，图片上传失败！');
        if ($scope.formdata.image.indexOf(response.data.id) == -1) {
            $scope.formdata.image.push(response.data.id);
        }
    };
    // 添加或更换图片事件
    $scope.photoChange = function (event) {
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
        if ($scope.ItemList) return;
        var num = $scope.itemCount;
        num++;
        console.log(num)
        Services.dianziCreate({
            "name": "我的点子" + num,
            "description": $scope.formdata.description,
            "creator": localStorage.userId,
            "images": $scope.images
        }, function (result) {
            if (result.code == 401) {
                if (confirm('请先登陆！')) {
                    window.location.href = '/#/innovation';
                }
            }
            else if (result.code == 0) {
                console.log(result)
                localStorage.draftId = result.data.id;
                window.location.href = '/#/step-2';
            } else {
                console.log(result);
            }
        }, function (error) {
            console.log(error);
        });
    }

    // 点子删除
    $scope.del = function (draftId) {
        if (confirm('你确定要删除吗？')) {
            Services.dianziDelete(draftId, function (result) {
                if (result.code == 401) {
                    if (confirm('请先登陆！')) {
                        window.location.href = '/#/innovation';
                    }
                }
                else if (result.code == 0) {
                    alert('删除成功！');
                    $scope.getList();
                } else {
                    console.log(result);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };

    // 点子编辑
    $scope.edit = function (draftId) {
        localStorage.draftId = draftId;
        window.location.href = '/#/step-2'
    };
};


