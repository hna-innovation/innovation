angular.module('starter.controllers')

    .controller('StepThirdCtrl', StepThirdCtrl)

function StepThirdCtrl($scope, $timeout, Services) {
    // 轮播图
    var mySwiper1 = new Swiper('#swiper-step2', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        autoplayDisableOnInteraction: false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType: "fraction"

    });

    // 获取点子详情
    Services.dianziDetail(localStorage.draftId, function (result) {
        if (result.code == 401) {
            if (confirm('请先登陆！')) {
                window.location.href = '/#/innovation';
            }
        }
        else if (result.code == 0) {
            $scope.ItemContent = result.data;
            $scope.description = result.data.projectDraft.description
        } else {
            console.log(result);
        }
    }, function (error) {
        console.log(error);
    });

    // 标签列表
    Services.getTags(function (result) {
        console.log(result);
        $scope.tagList = result.data;
        $timeout(function () {
            var buttonColor = ['button-pink', 'button-gray', 'button-green', 'button-blue']
            var count = null;
            function random(){
                return  count = parseInt(Math.random() * buttonColor.length)
            }
            for (var i = 0; i <= result.data.length; i++) {
                random();
                angular.element(document.querySelectorAll('#step-tag-list>button:nth-child(' + i + ')')).addClass(buttonColor[count])
            }
        })
    }, function (error) {
        console.log(error);
    });

    // 获取标签数组
    $scope.tags = [];
    $scope.tagArr = function (id) {
        if ($scope.tags.indexOf(id) == -1) {
            $scope.tags.push(id);
        } else {
            $scope.tags.splice($scope.tags.indexOf(id), 1);
        }
        console.log($scope.tags);
    };

    // 点子发布
    $scope.release = function () {
        console.log(localStorage.draftId);
        console.log($scope.title)
        console.log($scope.description)
        console.log($scope.tags)
        Services.dianziRelease({
            "draftId": localStorage.draftId,
            "name": $scope.title,
            "description": $scope.description,
            "tags": $scope.tags,
            "introduction": "",
            "marketAnalysis": "",
            "businessModel": "",
            "resourceRequired": ""
        }, function (result) {
            if (result.code == 401) {
                if (confirm('请先登陆！')) {
                    window.location.href = '/#/innovation';
                }
            }
            else if (result.code == 0) {
                localStorage.removeItem('draftId');
                console.log(result);
            } else {
                console.log(result);
            }
        }, function (error) {
            console.log(error);
        });
    };
};