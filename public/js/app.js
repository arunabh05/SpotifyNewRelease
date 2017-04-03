// public/js/app.js
var app = angular.module('ZikherDemoApp', ['ngRoute', 'appRoutes', 'MainCtrl','TrackCtrl']);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
