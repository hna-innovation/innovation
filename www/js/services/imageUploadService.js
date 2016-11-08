angular.module('starter.services')
  .factory('ImageUploadService', function(Upload, Api, HelperService, HnaAlert,
    Content) {
    'use strict';

    var imageUploadService = {};

    imageUploadService.upload = function(file) {
      file.upload = Upload.upload({
        url: HelperService.getUrl(Api.IMAGE_UPLOAD_API),
        data: {
          file: file
        }
      });

      return file.upload;
    };

    imageUploadService.validateImgFile = function(errType) {
      // 限制上传类型和文件大小
      if (errType === 'pattern') {
        HnaAlert.default(Content.image.ERROR_MESSAGE_TYPE);
        return;
      }

      if (errType === 'maxSize') {
        HnaAlert.default(Content.image.ERROR_MESSAGE_MAXSIZE);
        return;
      }
    }

    return imageUploadService;

  });
