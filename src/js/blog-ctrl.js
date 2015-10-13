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
      vm.blogpost.content = '';
      for (file in resp.files) {
        vm.blog.content += resp.files[file].content;
      }

      vm.blog.date = resp.updated_at;
      vm.blog.author = resp.owner.login;
    });
  }
}]);


// GitHub Personal Access Token!!!
// 87c755928d2db694fc764b7517a049e992f392a0

