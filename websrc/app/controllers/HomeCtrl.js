define('controllers/HomeCtrl', [
    'controllers/controllers',
    'services/EventService'
    ],
    function(controllers) {

    controllers

        .controller('HomeCtrl', [
            '$scope',
            'eventsData',
            function($scope, eventsData) {

            $scope.content = "Home Page Content";
            $scope.events = eventsData;

        }])

        .factory('EventsData', ['EventsLoader', function(EventsLoader) {

            //return EventsLoader();
            return [];

        }]);

});
