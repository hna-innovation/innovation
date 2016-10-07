'use strict';
angular.module('starter.services').factory("hnaAlert", function () {
    function msgAnimation(status, msg) {
        jQuery('#alert').addClass(status).text(msg).fadeIn(500).delay(2000).fadeOut(500);
    }
    return {
        success: function (msg) {
            msgAnimation("bg-success", msg)
        },
        error: function (msg) {
            msgAnimation("bg-error", msg)
        }
    }

});