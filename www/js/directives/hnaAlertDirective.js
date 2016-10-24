angular.module('starter')
  .factory("HnaAlert", function () {
    var expiredStatus = "bg-success bg-error bg-default bg-default-dark success-check error-check";
    var isWorking = false;

    function msgAnimation(status, msg) {
      if(isWorking) {
        jQuery('#alert').text(msg);
        return;
      }

      isWorking = true;
      jQuery('#alert').removeClass(expiredStatus).addClass(status).text(msg).fadeIn(500).delay(1000).fadeOut(500);
      setTimeout(function () {isWorking = false;}, 2000);
    }
  return {
    success: function (msg) {
      msgAnimation("bg-success", msg)
    },
    error: function (msg) {
      msgAnimation("bg-error", msg)
    },
    default: function (msg) {
      msgAnimation("bg-default", msg)
    },
    defaultSuccess: function (msg) {
      msgAnimation("bg-default-dark success-check", msg)
    },
    defaultError: function (msg) {
      msgAnimation("bg-default-dark error-check", msg)
    }
  }
});
