angular.module('starter', [
    'ionic',
    'starter.controllers',
    'starter.services',
    'angularValidator',
    'angularFileUpload'
    ]);

angular.module('starter.controllers', []);

angular.module('configuration', []);

angular.module('starter.services', ['configuration']);

angular.module('starter.modalServices', []);
