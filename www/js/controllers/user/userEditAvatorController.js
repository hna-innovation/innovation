angular.module('starter.controllers')

.controller('UserEditAvatorCtrl', function($scope, HnaAlert, $state,
	UserService, Content, $ionicViewSwitcher, $timeout, ImageUploadService,
	Upload, $ionicLoading) {

	getUserInfo();

	$scope.saveAvator = saveAvator;

	$scope.cancel = cancel;

	// 头像上传
	$scope.selectFiles = selectFiles;

	$scope.triggerSelectFiles = triggerSelectFiles;

	// 头像从本地选择完成后
	$scope.beforeChange = function(file) {
		$ionicLoading.show();
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

	function triggerSelectFiles() {
		$timeout(function() {
			angular.element('#btn-user-avator-upload').triggerHandler('click');
		});
	};

	function cancel() {
		$ionicViewSwitcher.nextDirection('back');
		$state.go('user-edit');
	}

	function saveAvator() {
		$scope.showPreview = false;
		if (!$scope.userAvatorId) {
			cancel();
			return;
		}

		UserService.setUserAvator({
			mediaId: $scope.userAvatorId
		}).success(function(result) {
			if (result.code == 0) {
				localStorage.userHeaderIcon = $scope.userInfo.headerIcon;
				$ionicViewSwitcher.nextDirection('back');
				$state.go('user-edit', {}, {
					reload: true
				});
			} else {
				HnaAlert.default(Content.user.UPDATE_AVATOR_ERROR);
			}
		}).error(function(error) {
			HnaAlert.default(Content.user.UPDATE_AVATOR_ERROR);
		})
	}

	function selectFiles(file, errFiles) {
		var errFile = errFiles && errFiles[0];

		if (errFile) {
			ImageUploadService.validateImgFile(errFile.$error);
			$ionicLoading.hide();
			return;
		}

		if (file) {
			$scope.showPreview = true;
		} else {
			$scope.showPreview = false;
		}

		$ionicLoading.hide();
	}

	function uploadFiles(dataUrl, name) {
		$ionicLoading.show();
		var file = Upload.dataUrltoBlob(dataUrl, name);

		if (file) {
			ImageUploadService
				.upload(file)
				.then(function(result) {
					$ionicLoading.hide();
					$scope.showPreview = false;

					var response = result.data;

					$timeout(function() {
						if (response.code == 0) {
							_imageUploadSuccess(response);
						} else {
							HnaAlert.default('头像上传失败！');
						}
					});

				}, function() {
					$ionicLoading.hide();
					$scope.showPreview = false;

					HnaAlert.default('头像上传失败！');
				});
		} else {
			$ionicLoading.hide();
			$scope.showPreview = false;
		}
	}

	function _imageUploadSuccess(response) {
		if (response.data) {
			var avator = response.data[0];

			$scope.userAvatorId = avator.id;
			$scope.userInfo.headerIcon = avator.url;
		}
	}

})
