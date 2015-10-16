// require('./gists-app.js');

// Controller to make DATE work!
(function() {

  angular.module("gisty").controller("DateCtrl", ["$scope", function($scope) {
      $scope.date = new Date();
  }]);


})();
