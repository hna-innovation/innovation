angular.module('starter')

    .controller('StepFirstCtrl', StepFirstCtrl)

function StepFirstCtrl($scope) {
    // 触发file input
    $scope.photoUpload = function (event) {
        jQuery(event.target).next().trigger('click');
    };
};

// 添加或更换图片事件
function photoChange(event) {
    var fileInput = event.target.files;
    var windowURL = window.URL || window.webkitURL;
    var picURL = windowURL.createObjectURL(fileInput[0]);
    jQuery(event.target).prev().attr('src', picURL);
};
