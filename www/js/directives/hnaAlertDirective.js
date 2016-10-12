angular.module('starter')
  .factory("HnaAlert", function () {
  function msgAnimation(status, msg) {
    jQuery('#alert').addClass(status).text(msg).fadeIn(500).delay(2000).fadeOut(500);
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
