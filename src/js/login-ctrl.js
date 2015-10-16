require('./gists-app.js');


// Not functioning, template from a tutorial that required angular-cookies, angular-storage, and angular-jwt
angular.module('gisty').controller('LoginCtrl', ['$scope', '$http', 'auth', 'store', '$location', function ($scope, $http, auth, store, $location) {
  $scope.login = function () {
    auth.signin({}, function (username, token) {
      // Success callback
      store.set('profile', username);
      store.set('token', token);
      $location.path('/');
    }, function (response) {
      // Error callback
      $scope.error = response.data;
    });
  }
}]);

