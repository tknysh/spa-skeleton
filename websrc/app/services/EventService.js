'use strict';

define('services/EventService', ['services/services'], function(services) {

    services

        .factory('Event', ['$resource', function ($resource) {

            return $resource('/events', {id: '@_id'}, {
                'get': {
                    method: 'GET',
                    isArray: false
                },
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });

        }])

        .factory('EventLoader', ['Event', '$q', function (Event, $q) {

            return function(id) {

                var delay = $q.defer();

                Event.get({id: id}, function(event) {

                    delay.resolve(event);

                }, function() {

                    delay.reject('Unable to load events!');

                });

                return delay.promise;

            };

        }])

        .factory('EventsLoader', ['Event', '$q', function (Event, $q) {

            return function() {

                var delay = $q.defer();

                Event.query(function(events) {

                    delay.resolve(events);

                }, function() {

                    delay.reject('Unable to load events!');

                });

                return delay.promise;

            }

        }]);

});
