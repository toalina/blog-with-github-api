require('./gists-app.js');
require('./gists-services.js');
// require('./gists-filter.js');
//http.get can pass in a URL, then a config stuff like headers
// get only accept 2 arguments

// http.put/post/delete can accept 3 things
// { gist_id: "123",}, {headers: {..."}};...

// ========= START OF CONTROLLER ======= //
angular.module('gisty').controller('GistsCtrl', function(gistyServices, $scope, $http, $log, token) {

  $scope.pagination = {
    currentPage: 1,
    perPage: 4,
    getOffset: function () {
      return $scope.pagination.currentPage * $scope.pagination.perPage;
    },
    prevPage: function() {
      $scope.pagination.currentPage--;
    },
    nextPage: function() {
      $scope.pagination.currentPage++;
    }
  };

  $http.get('https://api.github.com/users/toalina/gists', {
    headers: {
      'Authorization': 'token ' + token,
      /// THIS CAN get around the limit
    }
  }).then(successHandler, errorHandler);  // .then() accpet 2 arguments

  function successHandler(response) {
    var data = response.data;
    // data = angular.isArray(data) ? data : [data];
    // if it's an array, OK! If not, Stick it into an array

    $scope.gists = response.data;
    $log.info('response', response);
  } // object comes with property of data

  function errorHandler(response) {
    $scope.error = response.data;
    $log.error('response', response);
  }
	function gistyServicesCall(id) {
		console.log(id, 'did it');
		gistyServices.deleteGist(id);
	}
		
});
// square brackets [ ] is just to say explicitly we need to use this,
// then inject within the ()
// We don't actually need it!!!
// ng-annotate
