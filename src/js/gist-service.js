var app = require("./gists-app.js");

(function () {
  "use strict";

  angular.module("gisty").service("GistService", ["$http", "token", function ($http, token) {

    var urlRoot = "/gists";

    var Gist = {
      get: function (id) {
        if (angular.isDefined(id)) {
          // return $githubGist(id).read();
          return $http.get("https://api.github.com" + urlRoot + "/" + id, {
            headers: {
              'Authorization': 'token ' + token,
            }
          });
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
          }
        }).then(success(function() {
          $location.path(urlRoot + model._id);
        }));
      },

      delete: function (model) {
        return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Gist;
  }]);

}());
