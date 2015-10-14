require("./app");

angular.module("AwesomeBlog").controller("BlogpostCtrl", ["BlogpostService", "$routeParams", function(BlogpostService, $routeParams) {
  var vm = this;

  start();

  function start() {
    BlogpostService
    .get($routeParams.blogpost_id)
    .then(function(resp) {

      console.log(resp);

      vm.blogpost = {};
      vm.blogpost.text = '';
      for (file in resp.files) {
        vm.blog.text += resp.files[file].content;
      }

      vm.blog.date = resp.updated_at;
      vm.blog.author = resp.owner.login;
    });
  }
}]);


