var app = require("./gists-app.js");

(function () {
  "use strict";

	angular.module("gisty").service("GistService", ["$http", "$rootScope", function ($http, $rootScope) {

    var urlRoot = "https://api.github.com";

    var Gist = {
      get: function (id) {
        if (angular.isDefined(id)) {
          // return $githubGist(id).read();
          return $http.get(urlRoot + "/gists/" + id, {
						headers: {'Authorization': 'token ' + $rootScope.user.token,}
          });
        } else {
          // return $http.get(urlRoot);
          console.warn('root url');
        }
      },
      update: function (model) {
        return $http.patch(urlRoot + "/gists/" + model.id, model, {
          headers: {
						'Authorization': 'token ' + $rootScope.user.token,
          }
        });
      },
      create: function (model) {
        return $http.patch(urlRoot + "/gists/", model, {
          headers: {
						'Authorization': 'token ' + $rootScope.user.token,
          }
        });
      },

			delete: function (id) {
        return $http.delete(urlRoot + "/gists/" + id, {
          headers: {
						'Authorization': 'token ' + $rootScope.user.token,
          }
        });
      }
    };
    return Gist;
  }]);

}());
