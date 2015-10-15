var angular = require('angular');

/////// ====== CODE FOR OFFSET ======//
angular.module('gisty').filter('offset', function ($filter) {
  return function(input, start) {
    if (input) {
      start = parseInt(start, 10);
      return input.slice(start); // with starting point, then go from there
    }
  };
});

////// ======= CODE FOR PAGER ======== //
angular.module('gisty').filter('pager', function ($filter) {
  return function(results, pagerObj) {
    var filteredResults;
    filteredResults = $filter('offset')(results, pagerObj.getOffset());
    filteredResults = $filter('limitTo')(filteredResults, pagerObj.perPage);
    return filteredResults;
  };
});
