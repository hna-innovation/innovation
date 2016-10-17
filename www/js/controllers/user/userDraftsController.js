angular.module('starter.controllers')
  .controller('UserDraftsCtrl', UserDraftsCtrl);

function UserDraftsCtrl($scope, UserService, Content, $state, HnaAlert) {

  $scope.NO_DRAFTS = Content.draft.NO_DRAFTS;

  UserService.getUserDrafts(function(result) {
    if (result.code === 0) {
      if (result.data.content && result.data.content.length) {
        $scope.drafts = result.data.content;
      }
    } else {
      HnaAlert.default('获取用户创意草稿信息出错！');
    }

  }, function() {
    HnaAlert.default('获取用户创意草稿信息出错！');
  });

  $scope.goStep3 = function(draftId) {
    localStorage.draftId = draftId;
    $state.go('step-3');
  };

}