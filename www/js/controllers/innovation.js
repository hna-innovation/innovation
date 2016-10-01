angular.module('starter.controllers')

  .controller('InnovationCtrl', InnovationCtrl)

function InnovationCtrl($scope, Chats) {
    console.log(1);
  // init banner carousel
  new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    loop: true
  })
}
