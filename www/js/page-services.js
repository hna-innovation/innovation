angular.module('starter.services')
  .factory('Page', Page);

function Page() {
  var title='创新平台';
  return {
    title: function () {
      return title;
    },
    setTitle: function (newTitle) {
      title = newTitle;
    }
  }
}
