'use strict';

define('app', [
    'angular',
    'angularResource',
    'angularUIRouter',
    'controllers/index',
    'directives/index'
], function(angular) {

    return angular.module('spa-skeleton', [
        'ngResource',
        'ui.router',
        'controllers',
        'directives',
        'services'
    ]);

});


