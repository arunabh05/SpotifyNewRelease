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
			console.log(data.data);
			$scope.tracks = data.data;
		});
	}

	  $scope.sortType     = 'album'; // set the default sort type
	  $scope.sortReverse  = false;  // set the default sort order
	  $scope.searchTrack   = '';     // set the default search/filter term
	  
});
