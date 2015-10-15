require("./gists-app.js");

(function() {
  'use strict';

  angular.module("gisty").controller("GistListCtrl", ["GistService", function(GistService) {
    var vm = this;

    vm.gistList = [];
    vm.delete = deleteGist;

    start();

    function start() {
      getGistList();
    }

    function getGistList() {
      GistService.get().then(function (resp) {
        vm.gistList = resp.data;
      });
    }

    function deleteGist (gist) {
      GistService.delete(gist).then(function() {
        getGistList();
      });
    }

  }]);
}());
