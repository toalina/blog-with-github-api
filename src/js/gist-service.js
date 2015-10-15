var app = require("./gists-app.js");

(function () {
  "use strict";

  angular.module("gisty").service("GistService", ["$http", "token", function ($http, token) {

    var urlRoot = "https://api.github.com";
    var username = "toalina";

    var Gist = {
      get: function (id) {
        if (angular.isDefined(id)) {
          // return $githubGist(id).read();
          return $http.get(urlRoot + "users/" + username + "/gists/", {
            headers: {'Authorization': 'token ' + token,}
          });
        } else {
          // return $http.get(urlRoot);
          console.warn('root url');
        }
      },
      update: function (model) {
        return $http.patch(urlRoot + "/gists/" + model.id, model, {
          headers: {
            'Authorization': 'token ' + token,
          }
        });
      },
      create: function (model) {
        return $http.patch(urlRoot + "/gists", model, {
          headers: {
            'Authorization': 'token ' + token,
          }
        });
      },

      delete: function (model) {
        return $http.delete(urlRoot + "/gists/" + model._id);
      }
    };
    return Gist;
  }]);

}());
