angular.module('starter.controllers')

    .controller('StepFirstCtrl', StepFirstCtrl)

function StepFirstCtrl($scope, $http, $ionicPopup, $timeout, Services) {
    $scope.formdata = {};
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


    $scope.change = function () {
        $scope.ItemList = false;
    }
    
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
            "images": [
                "57ec85e53f798a26e4994fa1",
                "57ec85e53f798a26e4994fa1"
            ]
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
    // 触发file input
    // $scope.photoUpload = function () {
    //     jQuery('#photoUpload').trigger('click');
    // };
    // 添加或更换图片事件

    // $scope.photoChange = function (event) {

    //     var passData = {
    //         email: "fyc@haihangyun.com",
    //         password: "123456"
    //     }

    //     Services.login(passData, function (res) {
    //         var fileInput = event.target.files;
    //         console.log(fileInput)
    //         // var formdata = new FormData();
    //         // formdata.append("file", fileInput[0]);
    //         // console.log(formdata)

    //         jQuery('#photo-form').submit(function (ev) {
    //             ev.preventDefault();
    //             console.log(this)
    //             var formdata = new FormData();
    //             formdata.append("file", fileInput[0]);
    //             console.log(formdata)
    //             Services.imgUpload(formdata, function (result) {
    //                 console.log(result)
    //             }, function (error) {
    //                 console.log(result)
    //             })
    //         })
    //         jQuery('#photo-form').trigger('submit');
    //         var windowURL = window.URL || window.webkitURL;
    //         var picURL = windowURL.createObjectURL(fileInput[0]);
    //         jQuery('#imgUpload img').attr('src', picURL);


    //     }, function (error) {
    //         console.log('error');
    //     })


    // };
    // angular.element(jQuery('#photoUpload')).on('change', $scope.photoChange);
};


