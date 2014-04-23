
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

                            },

                            templateUrl: '/views/home.html'

                        })

                        .state("about", {

                            url: "/about",

                            controller: 'AboutCtrl',

                            resolve: {

                            },

                            templateUrl: '/views/about.html'

                        })

                }
            ]);

});

