angular.module('starter.services')
  .factory('PageService', function () {
    var title='创新平台';
    return {
      title: function () {
        return title;
      },
      setTitle: function (newTitle) {
        title = newTitle;
      }
    }
  });
