angular.module('starter.controllers')
  .controller('UserCommentsCtrl', UserCommentsCtrl);

function UserCommentsCtrl($scope, Services) {

  $scope.comments = [{
    "userName": "小灰灰",
    "content": "好",
    "time": "2016-10-13 15:50:37",
    "projectName": "good idea",
    "description": "It's a good idea,very nice!",
    "images": [
      "http://172.16.0.178/static2014.jpg"
    ]
  }, {
    "userName": "小灰灰",
    "content": "好的",
    "time": "2016-10-13 15:50:45",
    "projectName": "good idea",
    "description": "It's a good idea,very nice!",
    "images": [
      "http://172.16.0.178/static2014.jpg"
    ]
  }, {
    "userName": "小灰灰",
    "content": "好的很",
    "time": "2016-10-13 15:50:58",
    "projectName": "good idea",
    "description": "It's a good idea,very nice!",
    "images": [
      "http://172.16.0.178/static2014.jpg"
    ]
  }, {
    "userName": "小灰灰",
    "content": "好的",
    "time": "2016-10-13 15:51:30",
    "projectName": "good idea",
    "description": "It's a good idea,very nice!",
    "images": [
      "http://172.16.0.178/static2014.jpg"
    ]
  }];

}