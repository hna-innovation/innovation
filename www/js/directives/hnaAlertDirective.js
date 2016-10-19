angular.module('starter')
  .factory("HnaAlert", function () {
  function msgAnimation(status, msg) {
    jQuery('#alert').removeClass(expiredStatus).addClass(status).text(msg).fadeIn(500).delay(1000).fadeOut(500);
  }
  var expiredStatus = "bg-success bg-error bg-default bg-default-dark success-check error-check";
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
