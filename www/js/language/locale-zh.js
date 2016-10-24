angular.module('starter').config(['$translateProvider',
 function($translateProvider){
  $translateProvider.translations('zh',
  {
    "innovation": {
      "popular-innovation": "热门创意",
      "last-innovation": "最新创意",
      "popular-resources": "热门资源",
      "innovation-stars": "创新明星"
    },
    "stastitics": {
      "innovation": "创意",
      "resources": "资源",
      "show-case": "成功案例"
    },
    "home-footer": {
      "find-innovation": "发现创意",
      "find-resource": "寻找资源"
    },
    "user": {
      "my-innovation": "我的创意",
      "my-resource": "我的资源",
      "my-collection": "我的收藏",
      "my-praise": "我的获赞"
    }
  });
}])
