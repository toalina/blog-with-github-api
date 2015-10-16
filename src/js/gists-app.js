var angular = require('angular');
var route = require('angular-route');

(function() {
  'use strict';

	var app = angular.module('gisty', ['ngRoute', 'gisty.config']).

	config(["$routeProvider", function ($routeProvider) {
		$routeProvider

		////route home page blog posts//////////
		.when("/gists", {
			templateUrl: "html/blogpost.html",
			controller: "GistsCtrl",
		})

		/////form to make more blog posts///////
		.when("/gists/new", {
			templateUrl: "html/form.html",
			controller: "GistFormCtrl",
		})
		.when("/gists/:id", {
			templateUrl: "html/blog.html",
			controller: "SingleGistCtrl",
		})
		.when("/gists/:id/edit", {
			templateUrl: "html/form.html",
			controller: "GistFormCtrl",
		})
		.otherwise({
			redirectTo: "/gists",
		});
	}]);
})();


///////===============/////
// STUFF
//    /blogs/:gist_id/:hash/:filename
//    /blogs?gist_url=https://....... (Maybe routeParams?)
//    #/blogs?{{gist_url}}https://...

// <a href="#/blogs/{{}}"


// this.getGistData = function (gistID) {
// 	return {
// 		method: "GET",
// 		url: 'https://...../users/gists' + gistiD
// 	}
// }

