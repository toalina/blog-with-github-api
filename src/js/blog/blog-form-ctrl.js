require("./app");


(function() {
'use strict';

  angular.module("AwesomeBlog").controller("BlogFormCtrl", ["BlogpostService", "$routeParams", "$location", function(BlogpostService, $routeParams, $location){
      var vm = this;

      vm.save = saveBlog;

      vm.blogpost = {};

      start();

      // IF statement only works when edit
    function start() {

      vm.blogpost.date = new Date(Date.now());
      if ($routeParams.blogpost_id) {
        BlogpostService.get($routeParams.blogpost_id).then(function (resp) {

        vm.blogpost = resp.data;
        vm.blogpost.date = vm.blogpost.date || new Date(Date.now());
        });
      }
    }

    function saveBlog () {
      var method;

      method = $routeParams.blogpost_id ? "update" : "create";
      BlogpostService[method](vm.blogpost).then(function (resp) {
        $location.path("/blogposts/" + resp.data._id);
      });
    }
  }]);

}());
