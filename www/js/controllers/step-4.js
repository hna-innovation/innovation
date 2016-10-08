angular.module('starter.controllers')

    .controller('StepFourthCtrl', StepFourthCtrl)

function StepFourthCtrl($scope, $timeout, Services, HnaAlert, Page) {
    // set title
    Page.setTitle('编辑完善点子');
    // 轮播图
    $timeout(function () {
        Swiper('#swiper-step2', {
            direction: 'horizontal',
            loop: true,
            autoplay: 0,
            autoplayDisableOnInteraction: false,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationType: "fraction"
        });
    }, 500);

    $scope.draftId = localStorage.draftId;
    $scope.formdata = {};

    // 获取点子详情
    Services.dianziDetail($scope.draftId, function (result) {
        if (result.code == 0) {
            $scope.loading = false;
            $scope.ItemContent = result.data;
            $scope.formdata.description = result.data.projectDraft.description
        } else {
            console.log(result);
        }
    }, function (error) {
        console.log(error);
    });

    // 状态切换
    $scope.edit = function (type) {
        if (type) {
            $scope.descriptionShow = true;
            jQuery('.step-public-textarea').focus();
        } else {
            $scope.titleShow = true;
            jQuery('.step-public-input').focus();
        }
    }

    // 标签列表
    Services.getTags(function (result) {
        $scope.tagList = result.data;
        $timeout(function () {
            var buttonColor = ['button-pink', 'button-gray', 'button-green', 'button-blue']
            var count = null;
            function random() {
                return count = parseInt(Math.random() * buttonColor.length)
            }
            for (var i = 0; i <= result.data.length; i++) {
                var ele = angular.element(document.querySelectorAll('#step-tag-list>button:nth-child(' + i + ')'))
                random();
                ele.addClass(buttonColor[count]);
            }
            jQuery('#step-tag-list>button').click(function () {
                if (jQuery(this).hasClass('color-white')) {
                    jQuery(this).removeClass('color-white').css('background-color', '')
                } else {
                    jQuery(this).css('background-color', jQuery(this).css('color')).addClass('color-white')
                }

            })
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
        if ($scope.formdata.title == undefined || $scope.formdata.title == '') {
            HnaAlert.default('标题不能为空！');
            return;
        }
        if ($scope.formdata.description == undefined || $scope.formdata.description == '') {
            HnaAlert.default('描述不能为空！');
            return;
        }
        if ($scope.tags == undefined || $scope.tags.length == 0) {
            HnaAlert.default('标签不能为空！');
            return;
        }
        Services.dianziRelease({
            "draftId": $scope.draftId,
            "name": $scope.formdata.title,
            "description": $scope.formdata.description,
            "tags": $scope.tags,
            "introduction": "",
            "marketAnalysis": "",
            "businessModel": "",
            "resourceRequired": ""
        }, function (result) {
            if (result.code == 0) {
                localStorage.removeItem('draftId');
                console.log(result);
                window.location.href = '/#/detail?projectid=' + result.data.id + '&pageName=innovation';
            } else {
                console.log(result);
            }
        }, function (error) {
            console.log(error);
        });
    };
};