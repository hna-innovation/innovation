angular.module('starter')
  .directive("hnaTeamMembers", function() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/components/hna-team-members.html'
    };
  });