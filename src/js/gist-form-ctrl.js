require("./gists-app.js");

(function() {
'use strict';

  angular.module("gisty").controller("GistFormCtrl", ["GistService", "$routeParams", "$location", "$scope", function(GistService, $routeParams, $location, $scope){

      $scope.save = saveGist;

      $scope.gist = {};

      start();

      // IF statement only works when edit
    function start() {

    GistService.get($routeParams.id)
    .then(successHandler, errorHandler);
    $scope.gist.date = $scope.gist.date || new Date(Date.now());
    }

    function successHandler(response) {
      var data = response.data;
      console.log(data);
      $scope.gist = response.data;
      // $log.info('response', response);
    } // object comes with property of data

    function errorHandler(response) {
      $scope.error = response.data;
      // $log.error('response', response);
    }

    function saveGist () {
      var method;

      method = $routeParams.id ? "update" : "create";
      GistService[method]($scope.gist).then(function (resp) {
        $location.path("/gists/" + resp.data.id);
      });
    }
  }]);

}());


