require("./app");

(function() {
  "use strict";

  angular.module("AwesomeBlog")
    .directive("bl", function () {
    return {
      scope: {
        blogpost: "=blogpost", // functionally the same as ng-model
      },
      templateUrl: "templates/blog.html",
    };
  });
})();
