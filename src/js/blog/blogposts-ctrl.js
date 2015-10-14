require("./app");

(function() {
  'use strict';

  angular.module("AwesomeBlog").controller("BlogpostsCtrl", ["BlogpostService", function(BlogpostService) {
    var vm = this;

    vm.blogposts = [];
    vm.delete = deleteBlog;

    start();

    function start() {
      getBlogposts();
    }

    function getBlogposts() {
      BlogpostService.get().then(function(resp) {
        vm.blogposts = resp.data;
      });
    }

    function deleteBlog (blog) {
      BlogpostService.delete(blog).then(function() {
        getBlogposts();
      });
    }
  }]);
}());
