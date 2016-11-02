angular.module('starter.controllers')

	.controller('UserEditAvatorCtrl', function($scope, HnaAlert, $state, UserService, Content, $ionicViewSwitcher, $timeout, ImageUploadService, Upload) {

			getUserInfo();

			$scope.saveAvator = saveAvator;

			$scope.cancel = cancel;

			// 头像上传
			$scope.selectFiles = selectFiles;

			// 头像从本地选择完成后
		  $scope.beforeChange = function(file) {
				$scope.showPreview = true;
		  };

			$scope.savePreview = uploadFiles;

			$scope.canelPreview = function() {
        $scope.showPreview = false;
      }

			function getUserInfo() {
				UserService.getUserInfo(function(result) {
					$scope.userInfo = result.data;
				}, function() {
					//出错信息统一在app.js处理,包括错误码401、404、504
					// HnaAlert.default(Content.user.LOAD_DATA_ERROR);
				});
			}

			function cancel() {
				$ionicViewSwitcher.nextDirection('back');
				$state.go('user-edit');
			}

			function saveAvator() {
				if (!$scope.userAvatorId) {
					cancel();
					return;
				}

				UserService.setUserAvator({
					mediaId: $scope.userAvatorId
				}).success(function(result){
					if(result.code == 0) {
            $ionicViewSwitcher.nextDirection('back');
            $state.go('user-edit', {}, {reload: true});
					}
					else{
						HnaAlert.default(Content.user.UPDATE_AVATOR_ERROR);
					}
				}).error(function(error){
					HnaAlert.default(Content.user.UPDATE_AVATOR_ERROR);
				})
			}

			function selectFiles(file, errFiles) {
		    var errFile = errFiles && errFiles[0];

		    if (errFile) {
		      ImageUploadService.validateImgFile(errFile.$error);
					$scope.loading = false;
		      return;
		    }
		  }

			function uploadFiles(dataUrl, name) {
				$scope.loading = true;
				var file = Upload.dataUrltoBlob(dataUrl, name);

				if (file) {
		      ImageUploadService
		        .upload(file)
		        .then(function(result) {
		          $scope.loading = false;
							$scope.showPreview = false;

		          var response = result.data;

		          $timeout(function() {
		            if (response.code == 0) {
		              _imageUploadSuccess(response);
		            } else {
		              HnaAlert.default('头像上传失败！');
		            }
		          });

		        },function() {
		          $scope.loading = false;
							$scope.showPreview = false;

		          HnaAlert.default('头像上传失败！');
		        });
		    } else {
		      $scope.loading = false;
					$scope.showPreview = false;
		    }
			}

			function _imageUploadSuccess(response) {
		    if (response.data) {
					var avator = response.data[0];

		      $scope.userAvatorId = avator.id;
		      $scope.userInfo.headerIcon = avator.url;
					localStorage.userHeaderIcon = avator.url;
		    }
		  }

	})
