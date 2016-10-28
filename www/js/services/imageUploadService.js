angular.module('starter.services')
  .factory('ImageUploadService', function(Upload, Api) {
    'use strict';

    var imageUploadService = {};

    imageUploadService.upload = function(file) {
      file.upload = Upload.upload({
        url: Api.IMAGE_UPLOAD_API,
        data: { file: file }
      });

      return file.upload;
    };

    return imageUploadService;

  });