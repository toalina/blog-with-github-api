var angular = require('angular');
var angularRoute = require('angular-route');

(function() {
  'use strict';

  var app = angular.module('gisty', ['ngRoute']).
  // define module
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/gists', {
      templateUrl: 'html/blogpost.html',
      controller: 'GistsCtrl'
    })
  }

    ])

})();

