angular.module('starter.services')

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
	        				"<li><i class='if' ng-class=\"{true:'i-aixinhover',false:'i-collect'}[detail.like]\" ng-click='like(detail)'></i>{{detail.likeCount}}</li>"+
	        				"<li><i class='if' ng-class=\"{true:'i-star1',false:'i-star'}[detail.favorite]\" ng-click='favorite(detail)'></i>{{detail.favoriteCount}}</li>"+
	        				"<li ui-sref=\"detail-page-comments\"><i class='if i-xiaoxi'></i></li>"+
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
});
