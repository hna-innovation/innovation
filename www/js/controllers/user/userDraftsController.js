angular.module('starter.controllers')
  .controller('UserDraftsCtrl', UserDraftsCtrl);

function UserDraftsCtrl($scope, UserService, Content, $state, HnaAlert) {

  $scope.NO_DRAFTS = Content.draft.NO_DRAFTS;

  UserService.getUserDrafts(function (result) {
    if (result.data && result.data.content && result.data.content.length) {
      $scope.drafts = result.data.content;
    } else {
      $scope.attentionMsg = Content.EMPTY_CONTENT;
    }
  }, function (error) {
    //出错信息统一在app.js处理,包括错误码401、404、504
    //HnaAlert.default('获取用户创意草稿信息出错！');
    $scope.attentionMsg = Content.TIME_OUT;
  });

  $scope.goStep3 = function(draftId) {
    localStorage.draftId = draftId;
    $state.go('step-3', {parentPage: 'user-draft'});
    $ionicViewSwitcher.nextDirection("forwoard");

  };

}
