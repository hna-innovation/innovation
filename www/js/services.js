angular.module('starter.services')

.factory('Services', ['$http', 'LOCAL_TEST_URL', function ($http, LOCAL_TEST_URL) {
  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }

  return {
    getUrl: getUrl,

    getProjectsByTags: function(tags, success, error) {
      return $http.get(getUrl('/api/show/project?tag='+tags))
        .success(success)
        .error(error);
    },

    //get all tags
    getTags: function (success, error) {
      return $http.get(getUrl('/api/tags?type=0'))
        .success(success)
        .error(error);
    },

    //login
    login: function (data, success, error) {
      return $http.post(getUrl('/api/login'), data)
        .success(success)
        .error(error)
    },

    //logout
    logout: function (success, error) {
      return $http.get(getUrl('/api/user/logout'))
        .success(success)
        .error(error)
    },

    //register
    register: function (data, success, error) {
      return $http.post(getUrl('/api/reg'), data)
        .success(success)
        .error(error)
    },

    // 图片上传
    imgUpload: function (data, success, error) {
      return $http.post(getUrl('/api/media/image'), data)
        .success(success)
        .error(error);
    },

    // 创意列表
    dianziList: function (userId, success, error) {
      return $http.get(getUrl('/api/draft?userId=' + userId + '&page=0&size=8&sort=createdDate,desc'))
        .success(success)
        .error(error);
    },

    // 创意创建
    dianziCreate: function (data, success, error) {
      return $http.post(getUrl('/api/draft'), data)
        .success(success)
        .error(error);
    },

    // 创意删除
    dianziDelete: function (draftId, success, error) {
      return $http.delete(getUrl('/api/draft/' + draftId))
        .success(success)
        .error(error);
    },

    // 创意详情
    dianziDetail: function (draftId, success, error) {
      return $http.get(getUrl('/api/draft/' + draftId))
        .success(success)
        .error(error);
    },

    // 创意编辑
    dianziEdit: function (draftId, data, success, error) {
      return $http.put(getUrl('/api/draft/' + draftId), data)
        .success(success)
        .error(error);
    },

    // 创意发布
    dianziRelease: function (data, success, error) {
      return $http.post(getUrl('/api/project'), data)
        .success(success)
        .error(error);
    },

    clickLikeAdd: function (item) {
      return $http.post(getUrl('/api/user/likeProject?projectId=' + item.id + '&add=true'))
        .success(function () {
          item.like = true;
          item.likeCount++
        });
    },

    clickLikeCancle: function (item) {
      return $http.post(getUrl('/api/user/likeProject?projectId=' + item.id + '&add=false'))
        .success(function () {
          item.like = false;
          item.likeCount--
        });
    },

    getUserInfo: function(userId) {
      return 	$http.get(getUrl("/api/user?userId=" + userId));
    }
  };
}]);
