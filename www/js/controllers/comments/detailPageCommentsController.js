angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', DetailPageCommentsCtrl);

function DetailPageCommentsCtrl($scope, $state, $stateParams, Content, CommentService, HnaAlert, $ionicViewSwitcher) {
  'use strict';

  var _projectId = $stateParams.projectId;
  var _parentPage = $stateParams.parentPage;
  var _userId = localStorage.userId;


  $scope.projectId = _projectId;
  $scope.currentUserId = _userId;

  $scope.isCurrentUser = function (userId) {
    return _userId === userId;
  }

  $scope.submitComment = function(content) {

    var comment = {
      content: $scope.newComment,
      targetId: _projectId
    };

    CommentService.addProjectComment(comment, function() {
      HnaAlert.default(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
      $scope.getProjectComments();
      $scope.newComment = '';

    }, function() {
      // TODO
    });
  }

  $scope.getProjectComments = function() {

    CommentService.getProjectComments(_projectId, function(res) {
      if(res.data && res.data.content){
        $scope.comments = res.data.content;
      }
    }, function() {
      // TODO
    });
  }
  $scope.getProjectComments();

  $scope.goUserInfoPage = function (otherUserId) {
    if(_userId) {
      _userId == otherUserId ? $state.go('user') : $state.go('other-user', {userId:otherUserId});
    } else {
      $state.go('other-user', {userId:otherUserId})
    }
    $ionicViewSwitcher.nextDirection("forward");
  }

  $scope.goBack = function(){
    $ionicViewSwitcher.nextDirection('back');
    $state.go('detail', {projectId: $scope.projectId, pageName: _parentPage}, {reload: false});
  }
}
