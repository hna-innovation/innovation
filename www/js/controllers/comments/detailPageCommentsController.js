angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', DetailPageCommentsCtrl);

function DetailPageCommentsCtrl($scope, $state, $stateParams, Content, CommentService, HnaAlert, $ionicViewSwitcher, UtilityService) {
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

  $scope.comments = [];
  $scope.hasMoreData = true;

  var getProjectComments = function() {
    var offset = 0;

    return function() {
      CommentService.getProjectComments(offset, _projectId, function(res) {

        if (res.data.content && res.data.content.length) {
          $scope.comments = UtilityService.concatArray($scope.comments, res.data.content);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        } else {
          $scope.attentionMsg = Content.EMPTY_CONTENT;
          $scope.hasMoreData = false;
        }

      }, function(error) {
        $scope.attentionMsg = Content.TIME_OUT;
        $scope.hasMoreData = false;
      });

      offset++;
    };
  };

  $scope.getProjectComments = getProjectComments();

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
