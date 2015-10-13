require("./app");

angular.module("AwesomeBlog").controller("BlogpostCtrl", ["BlogpostService", "$routeParams", function(BlogpostService, $routeParams) {
  var vm = this;

  start();

  function start() {
    BlogpostService.get($routeParams.blogpost_id).then(function(resp) {
      vm.blogpost = resp.data;
    });
  }
}]);


// GitHub Personal Access Token!!!
// 87c755928d2db694fc764b7517a049e992f392a0

