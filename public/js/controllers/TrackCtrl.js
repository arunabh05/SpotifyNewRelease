// public/js/controllers/MainCtrl.js
angular.module('TrackCtrl', []).controller('TrackController',

function($scope, $http) {
	$scope.tagline = 'Talk.';

	$scope.tracks = null;
	if ($scope.tracks === null) {
		$http({
			method : "GET",
			url : '/api/tracks',
		}).then(function(data) {
			$scope.tracks = data.data;
		});
	}
});
