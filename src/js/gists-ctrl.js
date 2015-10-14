require('.gist-app.js');

//http.get can pass in a URL, then a config stuff like headers
// get only accept 2 arguments

// http.put/post/delete can accept 3 things
// { gist_id: "123",}, {headers: {..."}};...

// ========= START OF CONTROLLER ======= //
angular.module('gisty').controller('GistsCtrl', function($scope, $http, $log, $q) {

  $scope.pagination = {
    currentPage: 1,
    perPage: 5,
    getOffset: function () {
      return $scope.pagination.currentPage * $scope.pagination.perPage;
    },
  };

  $http.get('https://api.github.com/users/toalina/gists', {
    headers: {
      'Authorization': 'token e2ae42a83c810214405ddcda8adc5fd5db6d488c',
      /// THIS CAN get around the limit
    }
  }).then(successHandler, errorHandler);  // .then() accpet 2 arguments

  function successHandler(response) {
    var data = response.data;
    data = angular.isArray(data) ? data : [data];
    // if it's an array, OK! If not, Stick it into an array

    $scope.gists = response.data;
    $log.info('response', response);
  } // object comes with property of data

  //$log allows control, will shut down for test, better than console.log

  function errorHandler(response) {
    $scope.error = response.data;
    $log.error('response', response);
  }

  // angular.forEach loop to go through the object
  // and grab selected key/values
  $scope.message = "Hello Gists!";

});

// ====== CODE FOR OFFSET ======//
angular.module('gisty').filter('offset', function($filter) {
  return function(input, start) {
    if (input) {
      start = parseInt(start, 10);
      return input.slice(start); // with starting point, then go from there
    }
  };
});
// ======= CODE FOR PAGER ======== //
angular.module('gisty').filter('pager', function ($filter) {
  return function(results, pagerObj) {
    var filteredResults;

    filteredResults = $filter('offset')(results, pagerObj.getOffset());
    filteredResults = $filter('limitTo')(filteredResults, pagerObj.perPage);
    return filteredResults;
  };
});



// square brackets [ ] is just to say explicitly we need to use this,
// then inject within the ()
// We don't actually need it!!!
// ng-annotate
