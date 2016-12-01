// Generated by CoffeeScript 1.11.1
(function() {
  angular.module('tmsApp', ['ngRoute']).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/login', {
        templateUrl: '/app/login/index.html',
        controller: 'LoginCtrl'
      }).when('/regist', {
        templateUrl: '/app/regist/index.html',
        controller: 'RegistCtrl'
      }).when('/', {
        templateUrl: '/app/index/index.html',
        controller: 'IndexCtrl'
      });
    }
  ]).run([
    '$location', function($location) {
      return $location.path('/login').replace();
    }
  ]);

}).call(this);

//# sourceMappingURL=index.js.map
;
// Generated by CoffeeScript 1.11.1
(function() {
  angular.module('tmsApp').controller('IndexCtrl', [
    '$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
      return 1;
    }
  ]);

}).call(this);

//# sourceMappingURL=indexCtrl.js.map
;
// Generated by CoffeeScript 1.11.1
(function() {
  angular.module('tmsApp').controller('LoginCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.userEntity = {
        username: '',
        password: ''
      };
      $scope.rememberMe = false;
      return $scope.doLogin = function() {
        console.log($scope.userEntity);
        return $location.path('/').replace();
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=loginCtrl.js.map
;
// Generated by CoffeeScript 1.11.1
(function() {
  angular.module('tmsApp').controller('LoginCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.userEntity = {
        username: '',
        password: ''
      };
      $scope.rememberMe = false;
      $scope.doLogin = function() {
        console.log($scope.userEntity);
        return $location.path('/').replace();
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=loginCtrl.js.map
;
// Generated by CoffeeScript 1.11.1
(function() {
  angular.module('tmsApp').controller('LoginCtrl', ['$scope', function($scope) {}]);

}).call(this);

//# sourceMappingURL=loginCtrl.js.map
;
// Generated by CoffeeScript 1.11.1
(function() {
  angular.module('tmsApp').controller('RegistCtrl', [
    '$scope', function($scope) {
      $scope.userEntity = {
        username: '',
        password: '',
        password2: ''
      };
      return $scope.doReg = function() {
        return console.log($scope.userEntity);
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=registCtrl.js.map