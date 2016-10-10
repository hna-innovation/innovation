angular.module('starter.services')
  .factory('Page', Page);

function Page(LOCAL_TEST_URL) {
  var title='创新平台';
  return {
    title: function () {
      return title;
    },
    setTitle: function (newTitle) {
      title = newTitle;
    },
    getImageUrl: function(url) {
      return url ? LOCAL_TEST_URL + '' + url: url;
    }
  }
}
