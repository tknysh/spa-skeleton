
define(['app'], function(app) {

    app.config(
            ['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {

                    $urlRouterProvider
                        .when('', '/home');

                    $stateProvider

                        .state("home", {

                            url: "/home",

                            controller: 'HomeCtrl',

                            resolve: {
                                eventsData: 'EventsData'
                            },

                            templateUrl: '/views/home.html?v=' + window.appVersion

                        })

                        .state("about", {

                            url: "/about",

                            controller: 'AboutCtrl',

                            resolve: {

                            },

                            templateUrl: '/views/about.html?v=' + window.appVersion

                        })

                }
            ]);

});

