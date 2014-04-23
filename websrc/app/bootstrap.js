define('bootstrap', [
    'require',
    'angular',
    'app',
    'routes'
], function(require, angular) {

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['spa-skeleton']);
    });

});