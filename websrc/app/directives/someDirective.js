define('directives/someDirective', [
    'directives/directives'
], function(directives) {

    directives.directive('someDirective', function() {

        return {

            restrict: 'A',

            link: function($scope, element, attrs) {



            }

        }

    });

});
