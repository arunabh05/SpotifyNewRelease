// public/js/appRoutes.js
    
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // Track page that will use the TrackController
        .when('/tracks', {
            templateUrl: 'views/tracks.html',
            controller: 'TrackController'
        });

    $locationProvider.html5Mode(true);

}]);