require('angular');
require('angular-route');
require('./github-adapter.js');

(function(){

  'use strict';
  // Declare app level module which depends on filters, and services
  var AwesomeBlogApp = angular.module('AwesomeBlog', ['ngRoute', 'github-adapter']).

  config(["$routeProvider", function ($routeProvider) {
    $routeProvider

    ////route home page blog posts//////////
      .when("/blogposts", {
      templateUrl: "html/blogpost.html",
      controller: "BlogpostsCtrl as vm",
    })

    /////form to make more blog posts///////
      .when("/blogposts/new", {
      templateUrl: "html/form.html",
      controller: "BlogFormCtrl as vm",
    })
      .when("/blogposts/:blogpost_id/edit", {
      templateUrl: "html/form.html",
      controller: "BlogFormCtrl as vm",
    })
      .when("/blogposts/:blogpost_id", {
      templateUrl: "html/blog.html",
      controller: "BlogpostCtrl as vm",
    })
      .otherwise({
      redirectTo: "/blogposts",
    });

  }]);

  // Controller to make DATE work!
  AwesomeBlogApp.controller("DateCtrl", ["$scope", function($scope) {
      $scope.date = new Date();
  }]);

}());

require('./index.js');
