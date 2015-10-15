require("./gists-app.js");

angular.module('gisty').controller("SingleGistCtrl", ["GistService", "$scope", "$routeParams", "$log", function (GistService, $scope, $routeParams, $log) {

  // $scope.id = gists_id;
  console.log("params: " + $routeParams.id);

  start();

  function start() {

    GistService.get($routeParams.id)

    // $http.get('https://api.github.com/gists/' + gist.id, {
    //   headers: {
    //     'Authorization': 'token ' + token,
    //   }
    // })

    .then(successHandler, errorHandler);
  }

  function successHandler(response) {
    var data = response.data;
    console.log(data);
    $scope.gist = response.data;
    $log.info('response', response);
  } // object comes with property of data

  function errorHandler(response) {
    $scope.error = response.data;
    $log.error('response', response);
  }
    // .then(function(resp) {

    //   console.log(resp);

    //   vm.gist = {};

    //   vm.gist.description = '';

    //   for (file in resp.files) {
    //     vm.gist.filename += resp.files[file].filename;
    //   }

    //   vm.gist.public = resp.public;
    //   vm.gist.owner.login = resp.owner.login;

    // });

}]);




