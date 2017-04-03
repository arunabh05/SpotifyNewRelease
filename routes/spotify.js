var SpotifyWebApi = require('spotify-web-api-node');
var config = require('../config/auth.js');


exports.tracks = function(req, res){

	var spotifyApi = new SpotifyWebApi(config.spotifyAuth);

	var spotifyApi = new SpotifyWebApi({
		clientId : config.spotifyAuth.clientID,
		clientSecret : config.spotifyAuth.clientSecret
	});

	spotifyApi.clientCredentialsGrant()
	  .then(function(data) {
	    // Save the access token so that it's used in future calls
	    spotifyApi.setAccessToken(data.body['access_token']);

		spotifyApi.getNewReleases({ limit : 12, offset: 0, country: 'US' })
	    .then(function(data) {
	    	res.send({data: data.body.albums.items});
	      }, function(err) {

	         console.log("Something went wrong!", err);
	      });
	  }, function(err) {
	    console.log('Something went wrong when retrieving an access token', err.message);
	  });
};