angular.module('starter.services')

.factory('Services', Services)

.directive("hnaFooternav", function () {
    return {
        restrict: "EAC",
        replace: true,
        transclude: false,
        template :"<div class='detail-footer'>"+
        				  "<div class='detail-footer-share'>"+
        				  	"<a href='http://v.t.sina.com.cn/share/share.php?title={{detail.name}}&url={{shareUrl}}&pic={{imageUrls}}'><img src='../img/sina.png'></a>"+
        				  	"<a href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{shareUrl}}&title={{detail.name}}&summary={{detail.description}}&pics={{imageUrls}}'><img src='../img/qzone.png'></a>"+
        				  "</div>"+
	        			  "<ul class='detail-footer-nav'>"+
	        				"<li>{{detail.likeCount}}<i class='if' ng-class=\"{true:'i-aixinhover',false:'i-collect'}[detail.like]\" ng-click='like(detail)'></i></li>"+
	        				"<li>{{detail.favoriteCount}}<i class='if' ng-class=\"{true:'i-star1',false:'i-star'}[detail.favorite]\" ng-click='favorite(detail)'></i></li>"+
	        				"<li><i class='if i-xiaoxi'></i></li>"+
	        				"<li><i class='if i-fenxiang' id='share'></i></li>"+
	        			  "</ul>"+
        			  "</div>",
        	link : function(element){
        		jQuery(document).on("click","#share",function(){
        			var topNumber = jQuery(".detail-footer-share").css("top");
        			if(topNumber=="0px"){
        				jQuery(".detail-footer-share").animate({
        					top:"-60px"
        				})
        			}
        			if(topNumber=="-60px"){
        				jQuery(".detail-footer-share").animate({
        					top:"0px"
        				})
        			}
        		})
        	}
	}
})

.directive('hnaGoback', function(){
	return {
		restrict: "EAC",
		link : function(scope, element){
			element.on("click",function(){
				window.location.href = history.go(-1);
			})
        }
	}
})

function Services($http, LOCAL_TEST_URL) {

  function getUrl(api) {
    return LOCAL_TEST_URL + api;
  }

  return {
    getUrl: getUrl,

    //get all projects
    getProjects: function(success, error) {
      return $http.get(getUrl('/api/show/project'))
        .success(success)
        .error(error);
    },

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

    clickLikeAdd: function (projectId) {
      return $http.post(getUrl('/api/user/likeProject?projectId='+projectId+'&add=true'));
    },

    clickLikeCancle: function (projectId) {
      return $http.post(getUrl('/api/user/likeProject?projectId='+projectId+'&add=false'));
    }

  };
}
