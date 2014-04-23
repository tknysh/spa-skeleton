define('controllers/AboutCtrl', [
        'controllers/controllers'
    ],
    function(controllers) {

        controllers

            .controller('AboutCtrl', [
                '$scope',
                function($scope) {

                    $scope.content = "About Us Page Content";

                }])

    });
