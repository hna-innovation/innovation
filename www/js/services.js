angular.module('starter.services')

.factory('Services', ['$http', 'LOCAL_TEST_URL', function ($http, LOCAL_TEST_URL) {
  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }

  return {
    getUrl: getUrl,

    setUserTags: function(tags, success, error) {
      return $http.put(getUrl('/api/user/tags'), tags)
        .success(success)
        .error(error);
    },

    getUserTags: function(tags) {
      return $http.get(getUrl('/api/user/tags'));
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
      return $http.get(getUrl('/api/user/drafts?page=0&size=8&sort=createdDate,desc'))
        .success(success)
        .error(error);
    },

    // 创意创建 (草稿状态)
    dianziCreate: function (data, success, error) {
      return $http.post(getUrl('/api/drafts'), data)
        .success(success)
        .error(error);
    },

    // 创意删除
    dianziDelete: function (draftId, success, error) {
      return $http.delete(getUrl('/api/drafts/' + draftId))
        .success(success)
        .error(error);
    },

    // 创意详情
    dianziDetail: function (draftId, success, error) {
      return $http.get(getUrl('/api/drafts/' + draftId))
        .success(success)
        .error(error);
    },

    innovationDetail: function (success, error) {
      return $http.get(getUrl(Api.PROJECTS_API + '/' + _projectId + ""))
        .success(success)
        .error(error);
    },

    // 创意编辑
    dianziEdit: function (draftId, data, success, error) {
      return $http.put(getUrl('/api/drafts/' + draftId), data)
        .success(success)
        .error(error);
    },

    // 创意发布
    dianziRelease: function (data, success, error) {
      return $http.post(getUrl('/api/projects'), data)
        .success(success)
        .error(error);
    },

    clickLikeAdd: function (projectId, success) {
      return $http.post(getUrl('api/user/likeProject/' + projectId))
        .success(success);
    },

    clickLikeCancle: function (projectId, success) {
      return $http.delete(getUrl('/api/user/likeProject/' + projectId))
        .success(success);
    },
    clickFavoriteAdd: function (projectId, success) {
      return $http.post(getUrl('/api/user/favoriteProject/' + projectId))
        .success(success);
    },

    clickFavoriteCancle: function (projectId, success) {
      return $http.delete(getUrl('/api/user/favoriteProject/' + projectId))
        .success(success);
    },

    getUserInfo: function(userId) {
      return 	$http.get(getUrl("/api/user?userId=" + userId));
    }
  };
}]);
