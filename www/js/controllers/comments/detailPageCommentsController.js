angular.module('starter.controllers')
  .controller('DetailPageCommentsCtrl', DetailPageCommentsCtrl);

function DetailPageCommentsCtrl($scope, $state, $stateParams, Content, CommentService, HnaAlert, $ionicViewSwitcher, UtilityService, $window) {
  'use strict';

  var _projectId = $stateParams.projectId;
  var _parentPage = $stateParams.parentPage;
  var _userId = localStorage.userId;

  $scope.comments = [];
  $scope.hasMoreData = true;
  $scope.getProjectComments = getProjectCommentsByPage();
  $scope.getProjectComments();

  $scope.submitComment = submitComment;
  $scope.isCurrentUser = isCurrentUser;
  $scope.goUserInfoPage = goUserInfoPage;
  $scope.goBack = goBack;

  function submitComment(){
      var comment = {
        content: $scope.newComment
      };

      CommentService.addProjectComment(_projectId, comment, function(result) {
        if (result.code === 0) {
        HnaAlert.default(Content.comment.SUCCESS_MESSAGE_ADDED_COMMENT);
        $state.reload($state.current);
        $scope.newComment = '';
        } else{
          HnaAlert.default(Content.comment.UPDATE_ERROR);
        }
      }, function() {
        HnaAlert.default(Content.comment.UPDATE_ERROR);
      });
    };

  function getProjectCommentsByPage() {
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

      }, function() {
        $scope.attentionMsg = Content.TIME_OUT;
        $scope.hasMoreData = false;
      });

      offset++;
    };
  };

  function goUserInfoPage(otherUserId){
      if(_userId) {
        _userId == otherUserId ? $state.go('user') : $state.go('other-user', {userId:otherUserId});
      } else {
        $state.go('other-user', {userId:otherUserId})
      }
      $ionicViewSwitcher.nextDirection("forward");
    }

  function goBack(){
    if(_parentPage) {
      $state.go('detail', {projectId: _projectId, pageName: _parentPage}, {reload: false});
    } else {
      $window.history.back();
    }
    $ionicViewSwitcher.nextDirection('back');
  }

  function isCurrentUser(userId) {
    return _userId === userId;
  }
}
