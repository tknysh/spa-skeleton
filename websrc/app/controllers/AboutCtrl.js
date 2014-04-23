define('controllers/AboutCtrl', [
        'controllers/controllers',
        'services/SomeService'
    ],
    function(controllers) {

        controllers

            .controller('AboutCtrl', [
                '$scope',
                'SomeService',
                function($scope, SomeService) {

                    $scope.content = "About Us Page Content";

                }])

    });
