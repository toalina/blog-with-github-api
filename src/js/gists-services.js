require('./gists-ctrl');
	
var GistService = function($http) {
	console.log('win');
	this.deleteGist = function(id){
		$http.delete('https://api.github.com/users/toalina/gists/' + id );
	}
}

angular.module('gisty').service('gistyServices', GistService);