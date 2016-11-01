angular.module('starter.services')
  .factory('ImageUploadService', function(Upload, Api, HelperService, HnaAlert) {
    'use strict';

    var imageUploadService = {};

    imageUploadService.upload = function(file) {
      file.upload = Upload.upload({
        url: HelperService.getUrl(Api.IMAGE_UPLOAD_API),
        data: { file: file }
      });

      return file.upload;
    };

    imageUploadService.validateImgFile = function(errType) {
      // 限制上传类型和文件大小
      if ( errType === 'pattern') {
        HnaAlert.default('请选择正确的图片类型！');
        return;
      }

      if ( errType === 'maxSize') {
        HnaAlert.default('图片大小不能超过3M！');
        return;
      }
    }

    return imageUploadService;

  });
