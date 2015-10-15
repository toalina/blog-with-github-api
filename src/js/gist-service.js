require("./gists-app.js");

(function () {
  "use strict";

  angular.module("gisty").service("GistService", ["$http", function ($http) {
    var urlRoot = "/gists";

    var Gist = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $githubGist(id).read();
        } else {
          // return $http.get(urlRoot);
          console.warn('root url');
        }
      },
      update: function (model) {
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        return $http.post(urlRoot, model, {
          headers: {
            'Authorization': 'token ' + token,
            /// THIS CAN get around the limit
          }
        }).then(success(function() {
          $location.path("/gists/" + model._id);
        })
      ),
      delete: function (model) {
        return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Gist;
  }]);
}());
