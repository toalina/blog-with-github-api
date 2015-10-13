require('angular');
require('angular-route');

(function(){

  'use strict';
  // Declare app level module which depends on filters, and services
  var AwesomeBlogApp = angular.module('AwesomeBlog', ['ngRoute']).

  config(["$routeProvider", function ($routeProvider) {
    $routeProvider

    ////route home page blog posts//////////
      .when("/blogposts", {
      templateUrl: "templates/blogpost.html",
      controller: "BlogpostsCtrl as vm",
    })

    /////form to make more blog posts///////
      .when("/blogposts/new", {
      templateUrl: "templates/form.html",
      controller: "BlogFormCtrl as vm",
    })
      .when("/blogposts/:blogpost_id/edit", {
      templateUrl: "templates/form.html",
      controller: "BlogFormCtrl as vm",
    })
      .when("/blogposts/:blogpost_id", {
      templateUrl: "templates/blog.html",
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
