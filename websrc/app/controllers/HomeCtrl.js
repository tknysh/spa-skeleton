define('controllers/HomeCtrl', [
    'controllers/controllers'
    ],
    function(controllers) {

    controllers

        .controller('HomeCtrl', [
            '$scope',
            function($scope) {

            $scope.content = "Home Page Content";

        }])

});
