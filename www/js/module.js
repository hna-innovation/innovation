angular.module('configuration', []);

angular.module('starter', [
    'ionic',
    'starter.controllers',
    'starter.services',
    'angularValidator',
    'angularFileUpload',
    'ionic.closePopup',
    'ngCookies',
    'pascalprecht.translate',
    'configuration',
    'ngFileUpload'
    ]);

angular.module('starter.controllers', []);

angular.module('starter.services', ['configuration']);

angular.module('starter.modalServices', []);
