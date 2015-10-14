require('./app.js');

//http.get can pass in a URL, then a config stuff like headers
// get only accept 2 arguments

// http.put/post/delete can accept 3 things
// { gist_id: "123",}, {headers: {..."}};...
angular.module('gisty').filter('offset', function($filter) {
  return function(input, start) {
    if (input) {
      start = parseInt(start, 10);
      return input.slice(start); // with starting point, then go from there
    }
  };
});

angular.module('gisty').filter('pager', function ($filter) {
  return function(results, pagerObj) {
    var filteredResults;

    filteredResults = $filter('offset')(results, pagerObj.getOffset());
    filteredResults = $filter('limitTo')(filteredResults, pagerObj.perPage);
    return filteredResults;
  };

});

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
      'Authorization': 'token 20da3492df504c853cf25c6ef1f47c4e3ad398e4', /// THIS CAN get around the limit
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

  // angular.forEach(data, function(gist) {
  //   angular.forEach(gist.files, function (value, key) {
  //     if (key == "raw_url") {
  //       $http.get(value, {
  //         headers: {
  //           'Authorization': 'token 20da3492df504c853cf25c6ef1f47c4e3ad398e4', /// THIS CAN get around the limit
  //         }
  //       }).then(function (resp) {
  //           // spit out just the selected key/value stuff?!

  //       });
  //     }
  //   });
  // });

  $scope.message = "Hello Gists!";

});


// square brackets [ ] is just to say explicitly we need to use this,
// then inject within the ()
// We don't actually need it!!!
// ng-annotate
