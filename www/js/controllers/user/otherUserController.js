angular.module('starter.controllers')

	.controller('OtherUserCtrl', function($scope, $stateParams, $timeout, UserService, PageService) {

	  var _userID = $stateParams.userId;

    UserService.getOtherUserResume(_userID, function (result) {

      if (result.code == 0) {
        $scope.userInfo = result.data;
        PageService.setTitle($scope.userInfo.nickName + '的主页');
      }
    }, function () {
    });


    $timeout(function () {
      Swiper('#swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: 0,
        pagination: '.tab-nav',
        paginationClickable: true,
        paginationBulletRender: function (index) {
          var tag = [{
            name: "发布的创意"
          }, {
            name: "发布的资源"
          }]
          return "	<li class='swiper-pagination-bullet'><span>" + tag[index].name + "</span></li>"
        },
        onSlideChangeEnd: function (swiper) {
          var obj = angular.element(document.getElementById("swiper-nav")).find("li");
          var index = swiper.activeIndex;
          if (index == (obj.length + 1)) {
            index = 1;
          } else if (index == 0) {
            index = obj.length;
          }
          index--;
          obj.removeClass("active");
          obj.eq(index).addClass("active");
        }
      })
    }, 1000);


  })
