angular.module('starter.controllers')
  .controller('UserDraftsCtrl', UserDraftsCtrl);

function UserDraftsCtrl($scope, UserService, Content, $state) {

  $scope.NO_DRAFTS = Content.draft.NO_DRAFTS;

  UserService.getUserDrafts(function(result) {

    if (result.data.content && result.data.content.length) {
      $scope.drafts = result.data.content;
    }

  }, function() {
    // TODO
  });

  $scope.goStep3 = function(draftId) {
    localStorage.draftId = draftId;
    $state.go('step-3');
  }

}