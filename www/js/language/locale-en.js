angular.module('starter').config(['$translateProvider',
 function($translateProvider){
  $translateProvider.translations('en',
  {
    "innovation": {
      "popular-innovation": "Popular Ideas",
      "last-innovation": "Lastest Ideas",
      "popular-resources": "Popular Resources",
      "innovation-stars": "Innovation Stars"
    },
    "stastitics": {
      "innovation": "Idea",
      "resources": "Resource",
      "show-case": "Success"
    },
    "home-footer": {
      "find-innovation": "Find Ideas",
      "find-resource": "Find Resources"
    },
    "user": {
      "my-innovation": "Ideas",
      "my-resource": "Resources",
      "my-collection": "Collections",
      "my-praise": "Praises"
    }
  });
}])
