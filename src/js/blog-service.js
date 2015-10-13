require("./app");

(function () {
  "use strict";

  angular.module("AwesomeBlog").service("BlogpostService", ["$http", function ($http) {
    var urlRoot = "/blogposts";

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get(urlRoot + "/" + id);
        } else {
          return $http.get(urlRoot);
        }
      },
      update: function (blog) {
        return $http.put(urlRoot + "/" + blog._id, blog);
      },
      create: function (blog) {
        return $http.post(urlRoot, blog); // ideal, but doesn't work
      },
      delete: function (blog) {
        return $http.delete(urlRoot + "/" + blog._id);
      }
    };
    return Blog;
  }]);
}());
