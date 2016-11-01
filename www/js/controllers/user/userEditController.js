angular.module('starter.controllers')

	.controller('UserEditCtrl', function($scope, $stateParams, HnaAlert, $ionicHistory, $location, $ionicPopup, $state, UserService, Content, $ionicViewSwitcher, $timeout, ImageUploadService) {
      $scope.info = {target: $stateParams.target, text: $stateParams.text, length: $stateParams.length, mulitline: $stateParams.mulitline, required: $stateParams.required};

			$scope.getUserInfo = function() {
	      UserService.getUserInfo(function(result) {
	        $scope.userInfo = result.data;
	      }, function() {
          //出错信息统一在app.js处理,包括错误码401、404、504
          // HnaAlert.default(Content.user.LOAD_DATA_ERROR);
	      });
	    }

			// 头像从本地选择完成后
		  $scope.beforeChange = function(file) {
		    $scope.loading = true;
		  };

		  // 头像上传
		  $scope.uploadFiles = uploadImage;

      $scope.cancel = function() {
        $ionicViewSwitcher.nextDirection('back');
        $state.go('user-edit');
      }

      $scope.save = function() {
				if($scope.info.target === 'headerIcon') {
					saveAvator();
				} else {
					saveProfile();
				}
      }

			$scope.getUserInfo();

			function saveProfile() {
				if($scope.info.required) {
					var targetValue = $scope.userInfo[$scope.info.target]
					if (targetValue == null || targetValue.length == 0) {
						HnaAlert.default($scope.info.text + Content.user.NO_EMPTY);
						return;
					}
				}

				UserService.setUserProfile({
					nickName: $scope.userInfo.nickName,
          gender: $scope.userInfo.gender,
					company: $scope.userInfo.company,
					hobby: $scope.userInfo.hobby,
					speciality: $scope.userInfo.speciality
				}).success(function(result){
					if(result.code == 0) {
						//HnaAlert.default(Content.user.LOAD_DATA_SUCCESS);
            $ionicViewSwitcher.nextDirection('back');
            $state.go('user-edit', {}, {reload: true});

					}
					else{
						HnaAlert.default(Content.user.UPDATE_ERROR);
					}
				}).error(function(error){
					HnaAlert.default(Content.user.UPDATE_ERROR);
				})
			}

			function saveAvator() {
				// Todo
			}

			function uploadImage(file, errFiles) {
		    var errFile = errFiles && errFiles[0];

		    if (errFile) {
		      _validateImgFile(errFile.$error);
		      return;
		    }

		    if (file) {
		      ImageUploadService
		        .upload(file)
		        .then(function(result) {
		          $scope.loading = false;
		          var response = result.data;

		          $timeout(function() {
		            if (response.code == 0) {
		              _imageUploadSuccess(response);
		              HnaAlert.default('图片上传成功！');
		            } else {
		              HnaAlert.default('图片上传失败！');
		            }
		          });

		        },function() {
		          $scope.loading = false;
		          HnaAlert.default('图片上传失败！');
		        });
		    } else {
		      $scope.loading = false;
		    }
		  }

			function _imageUploadSuccess(response) {
		    if (response.data) {
		      $scope.userAvatorId = response.data[0].id;
		      $scope.picURL = response.data[0].url;
		      jQuery('#img-view').attr('src', $scope.picURL)
		    }
		  }

			function _validateImgFile(errType) {
		    // 限制上传类型和文件大小
		    if ( errType === 'pattern') {
		      HnaAlert.default('请选择正确的图片类型！');
		      jQuery('#photoUpload').val('');
		      return;
		    }

		    if ( errType === 'maxSize') {
		      HnaAlert.default('图片大小不能超过3M！');
		      jQuery('#photoUpload').val('');
		      return;
		    }
		  }
	})
