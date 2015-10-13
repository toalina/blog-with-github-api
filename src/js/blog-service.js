require("./app");
require("./github-adapter.js");

(function () {
  "use strict";

  angular.module("AwesomeBlog").service("BlogpostService", ["$http", "$githubGist",function ($http, $githubGist) {
    var urlRoot = "/blogposts";

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $githubGist(id).read();
        } else {
          // return $http.get(urlRoot);
          console.warn('root url');
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
