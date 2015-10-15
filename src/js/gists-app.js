var angular = require('angular');
var route = require('angular-route');

(function() {
  'use strict';
	var app = angular.module('gisty', ['ngRoute', 'gisty.config']).

	config(["$routeProvider", function ($routeProvider, $scope) {
		$routeProvider

		////route home page blog posts//////////
			.when("/blogposts", {
			templateUrl: "html/blogpost.html",
			controller: "GistsCtrl as vm",
		})

		/////form to make more blog posts///////
			.when("/blogposts/new", {
			templateUrl: "html/form.html",
			controller: "GistsCtrl as vm",
		})
			.when("/blogposts/:blog", {
			templateUrl: "html/blog.html",
			controller: "GistsCtrl as vm",
		})
			.otherwise({
			redirectTo: "/blogposts",
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

