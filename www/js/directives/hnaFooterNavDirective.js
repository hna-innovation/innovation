angular.module('starter.services')

.directive("hnaFooternav", function() {
  return {
    restrict: "EAC",
    replace: true,
    transclude: false,
    templateUrl: '../../templates/components/hna-detail-footer.html',
    link: function(element) {
      jQuery(document).on("click", "#share", function() {
        var topNumber = jQuery(".detail-footer-share").css("top");
        if (topNumber == "0px") {
          jQuery(".detail-footer-share").animate({
            top: "-60px"
          })
        }
        if (topNumber == "-60px") {
          jQuery(".detail-footer-share").animate({
            top: "0px"
          })
        }
      })
    }
  }
});