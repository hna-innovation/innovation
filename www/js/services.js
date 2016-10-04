angular.module('starter.services')

.factory('Services', Services)

.directive("hnaFooternav", function () {
    return {
        restrict: "EAC",
        replace: true,
        transclude: false,
        link: function (scope, element) {
        		var html = '<ul class="detail-footer-nav">';
        			html+=    '<li><i class="if i-collect" id="like"></i></li>';
        			html+=    '<li><i class="if i-star" id="favorite"></i></li>';
        			html+=    '<li><i class="if i-xiaoxi"></i></li>';
        			html+=    '<li><i class="if i-fenxiang"></i></li>';
        			html+= '</ul>';
        		element.append(html);

        		jQuery(document).on("click","#like",function(){
        			console.log("cccc")
        		})
        		
			jQuery(document).on("click","#favorite",function(){
        			console.log("aaa")
        		})        	
		}
	}
})


function Services($http, LOCAL_TEST_URL) {

  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }
  return {

    //get all projects
    getProjects: function(success, error) {
      return $http.get(getUrl('/api/show/project'))
        .success(success)
        .error(error);
    },

    //login
    login: function (data, success, error) {
      return $http.post(getUrl('/api/login'), data)
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

    // 点子列表
    dianziList: function (userId, success, error) {
      return $http.get(getUrl('/api/draft?userId=' + userId + '&page=0&size=8&sort=createdDate,desc'))
        .success(success)
        .error(error);
    },

    // 点子创建
    dianziCreate: function (data, success, error) {
      return $http.post(getUrl('/api/draft'), data)
        .success(success)
        .error(error);
    },

    // 点子删除
    dianziDelete: function (draftId, success, error) {
      return $http.delete(getUrl('/api/draft/' + draftId))
        .success(success)
        .error(error);
    },

    // 点子详情
    dianziDetail: function (draftId, success, error) {
      return $http.get(getUrl('/api/draft/' + draftId))
        .success(success)
        .error(error);
    },

    // 点子编辑
    dianziEdit: function (draftId, data, success, error) {
      return $http.put(getUrl('/api/draft/' + draftId), data)
        .success(success)
        .error(error);
    },

    // 点子发布
    dianziRelease: function (data, success, error) {
      return $http.post(getUrl('/api/project'), data)
        .success(success)
        .error(error);
    },

    // 获取标签
    getTags: function(success,error){
      return $http.get(getUrl('/api/tags?type=1'))
      .success(success)
      .error(error);
    },

  };
}
