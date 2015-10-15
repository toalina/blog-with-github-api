require("./gists-app.js");

(function() {
'use strict';

  angular.module("gisty").controller("GistFormCtrl", ["GistService", "$routeParams", "$location", function (GistService, $routeParams, $location) {

      var vm = this;

      vm.save = saveGist;

      vm.gist = {};

      start();

      // IF statement only works when edit
    function start() {

      vm.gist.created_at = new Date(Date.now());
      if ($routeParams.gist_id) {
        BlogpostService.get($routeParams.gist_id).then(function (resp) {

        vm.gist = resp.data;
        vm.gist.created_at = vm.gist.created_at || new Date(Date.now());
        });
      }
    }

    function saveGist () {
      var method;

      method = $routeParams.gist._id ? "update" : "create";
      GistService[method](vm.gist).then(function (resp) {
        $location.path("/gists/" + resp.data._id);
      });
    }
  }]);

}());
