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
      if ($routeParams.id) {
        BlogpostService.get($routeParams.id).then(function (resp) {

        vm.gist = resp.data;
        vm.gist.created_at = vm.gist.created_at || new Date(Date.now());
        });
      }
    }

    function successHandler(response) {
      vm.gist = response.data;
      vm.newFilename = Object.keys(vm.gist.files)[0];
      vm.newContent = vm.gist.files[vm.newFilename].content;

      $log.info("response", response);
      $log.info(vm.gist);
    }

    function errorHandler (response) {
      $log.error("response", response);
        } if ($routeParams.gist_id) {
        GistService.get($routeParams.gist_id).then(function()

        )
      }
    }


    function saveGist () {

      var method;

      method = $routeParams.gist._id ? "update" : "create";

      vm.gist.files = {};

      if (!vm.oldFilename) {
        vm.gist.files[vm.oldFilename] = {
          filename:

        }
      }

      vm.gist.files[vm.newFilename] = {
        "content": "vm.newContent";
      };

      GistService[method](vm.gist).then(successHandler, errorHandler);


      GistService[method](vm.gist).then(function (resp) {
        $location.path("/gists/" + resp.data._id);
      });

    }
  }]);

}());  // ======= END OF IIFE =======//



