angular.module('starter.controllers')

  .controller('InnovationCtrl', InnovationCtrl)

function InnovationCtrl($scope, Services) {
  // init banner carousel
  new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    loop: true
  })

  // Get Projects
  Services.getProjects(function (data) {
    $scope.projects = data.data.content;
  }, function (error) {
    console.log(error);
  })
}
