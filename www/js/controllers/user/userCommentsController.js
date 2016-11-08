angular.module('starter.controllers')
  .controller('UserCommentsCtrl', UserCommentsCtrl);

function UserCommentsCtrl($scope, CommentService, Content, UtilityService, PageService) {

  $scope.NO_COMMENTS = Content.comment.NO_COMMENTS;

  var swiper = new Swiper('.swiper-container-nav', {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 20,
    grabCursor: true
  });

  PageService.setTitle('我的评论');
}
