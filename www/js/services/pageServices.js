angular.module('starter.services')
  .factory('PageService', function () {
    // var title='创新平台';
    // var description='平台嫁接海航庞大的资源，使创意激素与资源对接，让十八万人为您的创意努力。';
    var title = '';
    var description = '';
    return {
      title: function () {
        console.log(title);
        return title;
      },
      setTitle: function (newTitle) {
        title = newTitle;

        // hack在微信等webview中无法修改document.title的情况
        var $body = $('body')
        document.title = newTitle;
        var $iframe = $('<iframe src="/favicon.ico"></iframe>').on('load', function() {
          setTimeout(function() {
            $iframe.off('load').remove()
          }, 0)
        }).appendTo($body)
      },
      description: function () {
        return description;
      },
      setDescription: function (newDescription) {
        description = newDescription;
      },
      setSeo: function (newTitle, newDescription) {
        title = newTitle;
        description = newDescription;
      }
    }
  });
